// 基本機能
(function () {

	// namespace.
	window.ew = window.ew || {};


	window.ew = {

		// 定数
		ITEM_STATUS: {
			NONE: 0,
			ENGLISH_DONE: 1,
			JAPANESE_DONE: 2,
			BOTH_DONE: 3
		},


		// 表示リスト
		list: [],

		// タップ判定
		hasTapEvent: ('ontouchstart' in window),
		EVENT: {
			TOUCH_START: (ew.hasTapEvent ? 'touchstart' : 'mousedown'),
			TOUCH_MOVE: (ew.hasTapEvent ? 'touchmove' : 'mousemove'),
			TOUCH_END: (ew.hasTapEvent ? 'touchend' : 'mouseup'),
		},

		// 保存機能
		save: function (data, callback) {

			ew.syncManager.addTask({
				type: 'itemAdd',
				url: '/app/ewords/api/item/add.php',
				method: 'post',
				data: data
			});
			callback && callback();

		},

		// 全件取得
		getAll: function (callback, options) {
			options = options || {};
			var self = this;

			if (ew.util.isOffLine() || options.useCache) {
				var array = ew.db.getMyPageList();
				callback && callback(array || []);

			} else { // offline.
				$.ajax({
					url: '/app/ewords/api/item/list.php',
					dataType: 'json',
					success: function (json) {
						ew.db.saveMyPageList(json);
						self.list = json;
						callback && callback(json);
					}
				});
			}
		},

		// リストアイテム作成
		createItem: function (item) {

			// create data.
			var index = item.id;
			var json;
			try {
				json = JSON.parse(item.json);
			} catch (e) {
				console.error('json parse error: ', e, item.json);
				return null;
			}

			// base DOM.
			var $item = $('<div class="item" data-index="'+index+'"/>');

			// English.
			var english = unescape(json.english);
			var range = json.rangesEN;
			var text = this.createHighlightText(english, range);
			$item.append('<div class="en">' + text + '</div>');

			// Japanese.
			var japanese = unescape(json.japanese);
			var range = json.rangesJP;
			var text = this.createHighlightText(japanese, range);
			$item.append('<div class="jp">' + text + '</div>');

			// Buttons.
			$item.append('<input type="button" class="toggleBtn jsToggle btnSquare" value="表示"/>');
			$item.append('<input type="button" class="actionBtn jsActionBtn btnSquare" value="..."/>');

			// return.
			return {
				done: parseInt(json.done),
				html: $item
			};
		},

		// // リスト表示
		// showItemList: function ($parent, options) {
		// 	options = options || {};
		// 	$parent = $parent || $('#listArea');
		// 	$parentDoneEn = $('#listDoneEnArea');
		// 	$parentDoneJp = $('#listDoneJpArea');
		// 	$parentDoneBoth = $('#listDoneBothArea');
		// 	var self = this;
		// 	this.getAll(function (itemList) {

		// 		if (itemList.length >= 1) {
		// 			var $snipet = $('<div/>');
		// 			var $snipetDoneEn = $('<div/>');
		// 			var $snipetDoneJp = $('<div/>');
		// 			var $snipetDoneBoth = $('<div/>');
		// 			for (var i = 0; i < itemList.length; i++) {
		// 				var item = itemList[i];
		// 				var retValue = self.createItem(item);

		// 				if (!retValue) continue;

		// 				var $item = retValue.html;
		// 				var done = retValue.done;

		// 				if (done === 1) {
		// 					$snipetDoneEn.append($item);
		// 				} else if (done === 2) {
		// 					$snipetDoneJp.append($item);
		// 				} else if (done === 3) {
		// 					$snipetDoneBoth.append($item);
		// 				} else {
		// 					$snipet.append($item);
		// 				}

		// 			}
		// 			if ($snipet.children().length) {
		// 				$parent.html($snipet);
		// 			} else {
		// 				$parent.html('表示できる情報はありません。');
		// 			}
		// 			if ($snipetDoneEn.children().length) {
		// 				$parentDoneEn.html($snipetDoneEn);
		// 			} else {
		// 				$parentDoneEn.html('表示できる情報はありません。');
		// 			}

		// 			if ($snipetDoneJp.children().length) {
		// 				$parentDoneJp.html($snipetDoneJp);
		// 			} else {
		// 				$parentDoneJp.html('表示できる情報はありません。');
		// 			}
		// 			if ($snipetDoneBoth.children().length) {
		// 				$parentDoneBoth.html($snipetDoneBoth);
		// 			} else {
		// 				$parentDoneBoth.html('表示できる情報はありません。');
		// 			}
		// 		}
		// 	}, options);
		// },

		// 日々の状況を最新化する
		refreshDailyActivity: function () {
			$.ajax({
				url: '/app/ewords/api/user_daily_action/list.php',
				dataType: 'json',
				success: function (activities) {
					var $list = $('<div/>');
					activities.forEach(function (activity) {
						var yyyymmdd = activity.yyyymmdd;
						var json = JSON.parse(activity.json);
						var $div = $('<div/>');
						$div.append('<span>' + yyyymmdd + '</span>');
						$div.append('<span class="pl20">登録:</span>' + (json.insCount || 0) + '<span>回</span>');
						$div.append('<span class="pl20">英語OK:</span>' + (json.enDoneCount || 0) + '<span>回</span>');
						$div.append('<span class="pl20">日本語OK:</span>' + (json.jpDoneCount || 0) + '<span>回</span>');
						$list.append($div);
					});
					$('#dailyActionList').html($list);
				}
			});
		},


		// ダイアログを開く
		showDialog: function (data) {
			$('#blackout').removeClass('hidden').css('height', $(document).height() + 'px');
			$('#confirmDialog').removeClass('hidden type1 type2 type3').addClass('type' + data.type);
			$('#confirmDialog [data-type="english"]').html(data.english);
			$('#confirmDialog [data-type="japanese"]').html(data.japanese);
		},

		// ダイアログを閉じる
		closeDialog: function () {
			$('#blackout').addClass('hidden');
			$('#confirmDialog').addClass('hidden');
		},


		// テキストから不要な情報を取り除く。
		trimInput: function (text, options) {
			var options = options || {};
			// console.debug('trimInput.', text);
			var text = text
						.replace(/<.*?>/g, '')
						.replace(/\r\n|\n\r|\n|\r/g, '')
						.replace(/&amp;/g, '&');

			if (options.dontWhiteSpace !== true) {
				text = text.replace(/&nbsp;/g, ' ');
			}

			return text;
		},


		// 入力テキストに、選択範囲に応じた色をつける。
		higlightInput: function (target) {
			// console.debug('higlightInput1');
			if (!target) {
				return;
			}
			// console.debug('higlightInput2');

			var $input  = (target === 'en' ? $('#inputEnglish') : $('#inputJapanese'));
			var $output = (target === 'en' ? $('#inputEnglish2') : $('#inputJapanese2'));
			var ranges = (target === 'en' ? ew.registBean.rangesEN : ew.registBean.rangesJP);
			var text = this.trimInput($input.html());
			// console.debug('higlightInput3', text, $input, $input.html());

			// 小さい順に並び替え
			// ranges = ranges.sort(function (o1, o2) {return o1[0] <= o2[0];});

			// テキスト構築
			// console.debug('highlight: ', text, ranges);
			var newText = this.createHighlightText(text, ranges);
			$output.html(newText);
		},


		// ハイライトテキストを作成する
		createHighlightText: function (text, ranges) {

			if (!text || !ranges || ranges.length === 0) {
				return text;
			}

			var newText = [];
			var pos = 0;
			for (var i = 0; i < ranges.length; i++) {
				var aRange = ranges[i];
				aRange = [parseInt(aRange[0]), parseInt(aRange[1])];
				// console.debug('i,range,pos', i, aRange, pos);

				if (pos < aRange[0]) {
					// console.debug('aaa');
					newText.push(text.substring(0, aRange[0] - pos));
					// console.debug('aaanewT:', newText);
					text = text.substring(aRange[0] - pos, text.length);
					// console.debug('aaaText: ', text);
					pos = aRange[0];
					// console.debug('aaaPos: ', pos);
				}

				var len = aRange[1] - aRange[0];

				newText.push('<span class="bgYellow jsHiBalloon" data-start-pos="'+aRange[0]+'" data-end-pos="'+aRange[1]+'">');
				newText.push(text.substring(0, len));
				newText.push('</span>');
				// console.debug('bbbNewText: ', newText);

				text = text.substring(len, text.length);
				// console.debug('bbbText: ', text);
				pos = aRange[1];
				// console.debug('bbbPos: ', pos);
			}
			newText.push(text);

			// console.debug('newText:', newText);
			return newText.join('');
		},


		// 日付表示1
		convertDispTime1: function (timestamp) {
			return timestamp;

			// var now = Math.floor(new Date().getTime() / 1000);
			// // var diff = Math.max((now - timestamp), 0);
			// var diff = Math.abs(timestamp);
			// console.debug('convertDispTime1', diff, now, timestamp);


			// // diff = Math.floor(diff / 1000);
			// if (diff < 60) {
			// 	return diff + '秒前';
			// }
			// diff = Math.floor(diff / 60);
			// if (diff < 60) {
			// 	return diff + '分前';
			// }
			// diff = Math.floor(diff / 60);
			// if (diff < 60) {
			// 	return diff + '時間前';
			// }
			// diff = Math.floor(diff / 24);
			// if (diff < 30) {
			// 	return diff + '日前';
			// }
			// diff = Math.floor(diff / 30);
			// return diff + 'ヶ月前';


		},

	};



	/**
	*	ユーティリティ
	*/
	var isIphone  = navigator.userAgent.toLowerCase().indexOf('iphone') !== -1;
	var isIpad    = navigator.userAgent.toLowerCase().indexOf('ipad') !== -1;
	var isAndroid = navigator.userAgent.toLowerCase().indexOf('android') !== -1;
	var storageKeyPrefix = 'ewords_';
	ew.util = {

		isIphone: function () {
			return isIphone;
		},
		isIpad: function () {
			return isIpad;
		},
		isAndroid: function () {
			return isAndroid;
		},
		isSmartPhone: function () {
			return isIphone || isIpad || isAndroid;
		},
		isEmpty: function (val) {
			return val === null || val === undefined || val.length === 0;
		},
		isNotEmpty: function (val) {
			return !this.isEmpty(val);
		},
		isOnLine: function () {
			return window.navigator.onLine;
		},
		isOffLine: function () {
			return !window.navigator.onLine;
		},

		isLogedIn: function () {
			return this.isNotEmpty($.cookie('ewords_as_id'));
		},

		getStorage: function () {
			return window.localStorage;
		},

		getUser: function () {
			var jsonString = this.getStorage().getItem(storageKeyPrefix + 'user');
			return this.isNotEmpty(jsonString) ? JSON.parse(jsonString) : null;
		},

		setUser: function (json) {
			var jsonString = this.getStorage().setItem(storageKeyPrefix + 'user', JSON.stringify(json));
		},

		loadUser: function (callback) {
			var self = this;
			if (this.isLogedIn()) {
				$.ajax({
					url: '/app/ewords/api/user/user.php',
					dataType: 'json',
					success: function (userJson) {
						self.setUser(userJson);
						callback && callback(userJson);
					}
				});
			}
		},

		refreshLoginUserName: function (options) {
			var options = options || {};

			if (options.type === 'logout') {
				$('#loginUserInfo').addClass('hidden');
				$('#loginLink').removeClass('hidden');
				return;
			}

			this.loadUser(function (user) {
				$('#loginUserName').text(user.disp_name);
				$('#loginLink').addClass('hidden');
				$('#loginUserInfo').removeClass('hidden');
			});
		},

		// confirm to user.
		// @return 0:No, 1:Yes
		confirmDialog: function (message, callback) {
			// TODO あとでデザインカスタマイズを入れる。
			var result = window.confirm(message);
			var result = (result ? 1 : 0);
			callback && callback(result);
		},


		showNotification: function (message, options) {
			console.debug('showNotification fire.', message, options);
			options = options || {};
			// var $notification = $('#notificationTemplate').clone();
			var $notification = $('<div class="notification"/>');
			$notification.html(message);
			$('#notificationArea').append($notification);
			$notification.addClass('show');

			$notification.on('click', function () {
				$(this).remove();
			});

			var duration = (options.duration || 3000) + 400; // duration + show animation time.
			setTimeout(function () {
				$notification.removeClass('show');
				options.callback && options.callback();
				setTimeout(function () {
					$notification.remove();
				}, 1500);
			}, duration);
		},
	};


	// タブの挙動
	//==============================================================================
	$('[data-tab-target]').on('click', function (e) {

		// 自分と親
		var $this = $(e.currentTarget);
		var $parent = $this.parent();

		// 自分も含めたタブ全体を取得する
		var $tabs = $parent.find('[data-tab-target]');

		// タブ、コンテンツを全て非活性とする
		$tabs.each(function () {
			var $this = $(this);
			$this.removeClass('selected');
			var targetName = $this.data('tab-target');
			$('[data-tab-dest="'+targetName+'"]').addClass('hidden');
		});

		// 自分のタブとコンテンツを表示する
		$this.addClass('selected');
		var targetName = $this.data('tab-target');
		$('[data-tab-dest="'+targetName+'"]').removeClass('hidden');
	});



	// ScrollToTopボタンの動き
	//==============================================================================
	var $scrollUpBtn = $('#scrollTopBtn');
	$scrollUpBtn.on('click', function () {
		$("html, body").animate({scrollTop: 0}, 800, "swing");
	});
	window.addEventListener('scroll', function () {
		var deltaY = $(window).scrollTop();
		if (deltaY > 200 && $scrollUpBtn.hasClass('show') === false) {
			$scrollUpBtn.addClass('show');
		} else if (deltaY < 200 && $scrollUpBtn.hasClass('show')) {
			$scrollUpBtn.removeClass('show');
		}
	}, false);









	// ページロード時の処理
	//==============================================================================
	var util = ew.util;

	// ユーザーデータ取得。取得後に、表示きりかえるかも。
	util.refreshLoginUserName();


	window.addEventListener('online', function () {
		ew.util.showNotification('オンラインになりました');
	});

	window.addEventListener('offline', function () {
		ew.util.showNotification('オフラインになりました');
	});































})();
