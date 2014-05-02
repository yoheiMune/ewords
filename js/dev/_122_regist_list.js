// List UI
(function () {

    // Alias.
    //=====================================================
    var 
        ITEM_STATUS_NONE = ew.ITEM_STATUS.NONE,
        ITEM_STATUS_ENGLISH_DONE = ew.ITEM_STATUS.ENGLISH_DONE,
        ITEM_STATUS_BOTH_DONE = ew.ITEM_STATUS.BOTH_DONE,
        util = ew.util,
        db = ew.db;


    // Public.
    //=====================================================
    ew.showItemList = function (parent, options) {

        _getAll(function (itemList) {

            var map = {};
            map[ITEM_STATUS_NONE]         = {snipet: [], target: parent || $('#listArea')};
            map[ITEM_STATUS_ENGLISH_DONE] = {snipet: [], target: $('#listDoneEnArea')};
            map[ITEM_STATUS_BOTH_DONE]    = {snipet: [], target: $('#listDoneBothArea')};

            util.each(itemList, function (item) {
                var data = _createItem(item);
                if (!data) {
                    return;
                }
                var snipet = map[data.status].snipet;
                snipet.push(data.html);
            });

            util.each(map, function (data) {
            	var snipet = data.snipet;
            	var html = (snipet.length > 0 ? snipet.join('') : '表示できる情報はありません。');
            	data.target.html(html);
            });

        }, options);
    };



    // Private.
    //=====================================================
    /**
     * get all items.
     */
    var _getAll = function (callback, options) {

        callback = callback || function () {};
        options = options || {};

        if (util.isOffLine() || options.useCache) {
            var array = db.getMyPageList() || [];
            callback(array);

        } else { // offline.
            $.ajax({
                url: '/app/ewords/api/item/list.php',
                dataType: 'json',
                success: function (json) {
                    db.saveMyPageList(json);
                    ew.list = json; // TODO refactoring. not use ew.list.
                    callback(json);
                },
                error: function () {
                    // TODO implement. maybe use common error handling or ajax method.
                }
            });
        }
    };
    /**
     * create Hightlight Text Line.
     */
    var _createItem = function (item) {

        var json = util.parseJsonString(item.json);
        if (!json) {
            return;
        }

        var html = util.createHTML('tmpl_list_item', {
            id: item.id,
            en: ew.createHighlightText(unescape(json.english), json.rangesEN),
            jp: ew.createHighlightText(unescape(json.japanese), json.rangesJP)
        });

        return {
            status: parseInt(json.done || ITEM_STATUS_NONE),
            html: html
        };
    };









    // 解答の表示きりかえ
    $('body').on('tap', '.jsToggle', function () {
        var $this = $(this);
        if ($this.hasClass('show')) {
            $this.parents('.item').removeClass('visibleOn');
            $this.val('表示');
        } else {
            $this.parents('.item').addClass('visibleOn');
            $this.val('非表示');
        }
        $this.toggleClass('show');
    });

    // 削除ボタン
    $('#deleteBtn').on('tap', function () {

        if (!window.confirm('削除しますか？')) {
            return false;
        }

        var id = ew.currentTargetId;
        console.debug('delete: ', id);
        $.ajax({
            url: '/app/ewords/api/item/delete.php',
            method: 'post',
            data: {id: id},
            dataType: 'json',
            success: function (json) {
                console.debug('deleted', json);
                ew.closeDialog();
                $('#listArea').find('[data-index="'+id+'"]').remove();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                if (jqXHR.status === 403) {
                    alert('認証されていません。');
                    ew.closeDialog();
                    ew.showLoginDialog();
                    return;
                }
            },
        });
    });


    // 対象のアイテムを取得する
    var _getItem = function (id) {
        var itemList = db.getMyPageList();
        for (var i = 0; i < itemList.length; i++) {
            var item = itemList[i];
            if (id === parseInt(item.id)) {
                return item;
            }
        }
        return null;
    }


    // アイテムの状態を変更する
    var _updateStatus = function (id, toStatus) {

        // ダイアログを閉じる.
        ew.closeDialog();

        // 以降の処理が少し重たいため、非同期に処理する.
        // TODO 処理を軽くしたい.
        setTimeout(function () {

            // 対象データを見つける
            var item = _getItem(id);
            if (!item) {
                alert('該当データはありません。 id=', id);
                return;
            }

            // 表示情報を取得する
            var bean = JSON.parse(item.json);

            // ステータ変更＆スチェック
            var currentStatus = bean.done ? parseInt(bean.done) : ew.ITEM_STATUS.NONE;
            var status;
            if (currentStatus === ew.ITEM_STATUS.NONE) {
                status = toStatus;
            } else if (currentStatus === ew.ITEM_STATUS.BOTH_DONE || currentStatus === toStatus) {
                status = currentStatus;
            } else {
                status = ew.ITEM_STATUS.BOTH_DONE;
            }
            if (status === currentStatus) {
                return ew.util.showNotification('更新する必要はありません.');
            } else {
                bean.done = status;
            }

            // API処理
            ew.syncManager.addTask({
                type: 'itemUpdate',
                url: '/app/ewords/api/item/update.php',
                method: 'post',
                data: {
                    id: id,
                    done: status
                }
            });

            // DBへ保存.
            var itemList = db.getMyPageList();
            for (var i = 0; i < itemList.length; i++) {
                var item = itemList[i];
                if (id === parseInt(item.id)) {
                    var json = JSON.parse(item.json);
                    json.done = status;
                    item.json = JSON.stringify(json);
                    break;
                }
            }        
            db.saveMyPageList(itemList);

            // リストの最新化
            ew.showItemList(null, {useCache: true});

            // オフラインの場合には、Noti.
            if (util.isOffLine()) {
                util.showNotification('オフラインのため、処理を保存しました.');
            }
        }, 1);
    };




    // 完了ボタン（English）
    $('#doneENBtn').on('tap', function () {
        var id = ew.currentTargetId;
        _updateStatus(id, ew.ITEM_STATUS.ENGLISH_DONE);
    });


    // 完了ボタン（Japanese）
    $('#doneJPBtn').on('tap', function () {
        var id = ew.currentTargetId;
        _updateStatus(id, ew.ITEM_STATUS.JAPANESE_DONE);
    });



    // 復活ボタン
    $('#liveBtn').on('tap', function () {
        var id = ew.currentTargetId;


        $.ajax({
            url: '/app/ewords/api/item/update.php',
            method: 'post',
            data: {
                id: id,
                done: ew.ITEM_STATUS.NONE
            },
            dataType: 'json',
            success: function (json) {
                console.debug('live: ', json);
                ew.closeDialog();
                ew.showItemList();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                if (jqXHR.status === 403) {
                    alert('認証されていません。');
                    ew.closeDialog();
                    ew.showLoginDialog();
                    return;
                }
            },

        });
    });


    // 編集ボタン
    $('#editBtn').on('tap', function () {
        ew.editTargetId = ew.currentTargetId;
        ew.editType = 'edit';

        // 対象データを見つける
        var item;
        var itemList = db.getMyPageList();
        for (var i = 0; i < itemList.length; i++) {
            var anItem = itemList[i];
            if (ew.editTargetId === parseInt(anItem.id)) {
                item = anItem;
                break;
            }
        }
        if (!item) {
            alert('該当データはありません。 id=', ew.editTargetId);
            return;
        }

        // 整形する
        var bean = JSON.parse(item.json);
        bean.english = ew.trimInput(bean.english);
        bean.japanese = ew.trimInput(bean.japanese);
        bean.rangesEN = bean.rangesEN || [];
        bean.rangesJP = bean.rangesJP || [];
        ew.registBean = bean;

        // 表示する
        $('#inputEnglish').html(bean.english).removeClass('fcLightGray');
        $('#inputJapanese').html(bean.japanese).removeClass('fcLightGray');
        ew.higlightInput('en');
        ew.higlightInput('jp');
        // TODO レーティングも。
        $('#registBtn').val('編集完了する');
        $('#cancelBtn').removeClass('hidden');

        // ダイアログを閉じる。
        ew.closeDialog();


        // 編集エリアに移動する
        $('html,body').animate({ scrollTop: 0 }, 'fast');
    });


    // アクションボタン
    $('body').on('tap', '.jsActionBtn', function () {

        // identify id.
        var $this = $(this);
        var $parent = $this.parents('.item');
        ew.currentTargetId = $parent.data('index');

        // identify type.
        var type = 3;
        if ($this.parents('#listArea').length !== 0) {
            type = 1;
        } else if ($this.parents('#listDoneEnArea').length !== 0) {
            type = 2;
        }

        // show dialog.
        ew.showDialog({
            type: type,
            english: $parent.find('.en').html(),
            japanese: $parent.find('.jp').html()
        });
    });


    // 黒背景を押されたら閉じる
    $('#blackout, #closeDialogBtn').on('tap', function () {
        $('#blackout').addClass('hidden');
        $('#confirmDialog').addClass('hidden');
    });





    // OnLoad.
    //=====================================================
    $(function () {
        ew.showItemList();        
    });


})();































