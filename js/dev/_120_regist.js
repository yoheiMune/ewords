

// 登録画面のUI
;(function () {

	// よく使う変数
	var
		util = ew.util,
		$inputEnglish = $('#inputEnglish'),
		$inputJapanese = $('#inputJapanese');



	// 登録情報
	ew.registBean = {};


	// 登録情報を保持するBeanを初期化する
	var initializeRegistBean = function () {
		ew.registBean = {
			english: '',
			japanese: '',
			rangesEN: [],
			rangesJP: [],
			rating: 0
		};
	}
	initializeRegistBean();

	// placeholderを設定する
	$('[data-placeholder]').each(function () {
		var $this = $(this);
		if ($this.html().length === 0) {
			$this.html($(this).data('placeholder'));
			$this.addClass('fcLightGray');
		}
	});

	// 入力の制御
	$('#inputEnglish, #inputJapanese').focus(function () {
		var $this = $(this);
		if ($this.html() === $this.data('placeholder')) {
			$this.html('');
		}
		$this.removeClass('fcLightGray');

	}).focusout(function () {
		var $this = $(this);
		if ($this.html().length === 0) {
			$this.html($(this).data('placeholder'));
			$this.addClass('fcLightGray');
		}
	});

	// ハイライトを解除する
	$('#cancelHighlightEnglish').on('tap', function (e) {
		console.debug('cancelHighlightEnglish');
		ew.registBean.rangesEN = [];
		ew.higlightInput('en');
		e.preventDefault();
		return false;
	});
	$('#cancelHighlightJapanese').on('tap', function (e) {
		console.debug('cancelHighlightJapanese');
		ew.registBean.rangesJP = [];
		ew.higlightInput('jp');
		e.preventDefault();
		return false;
	});


	// 登録ボタン
	$('#registBtn').on('tap', function () {

		var
			$inputEnglish = $('#inputEnglish'),
			$inputJapanese = $('#inputJapanese'),
			$ratingList = $('#inputRating span.on');

		// TODO 空白をトリムしてから、必須チェックを行う。

		// check input
		if ($inputEnglish.html() === $inputEnglish.data('placeholder')) {
			alert('英文章を入力してください');
			return false;
		}
		if ($inputJapanese.html() === $inputJapanese.data('placeholder')) {
			alert('日本語訳を入力してください');
			return false;
		}

		// save.
		var english = $inputEnglish.html();
		english = ew.trimInput(english);
		var japanese = $inputJapanese.html();
		japanese = ew.trimInput(japanese);
		var rating = $ratingList.length;
		console.debug(english, japanese, rating);

		ew.registBean.japanese = japanese;
		ew.registBean.english = english;
		ew.registBean.rating = rating;


		// 編集の場合には、前のものを削除する
		if (ew.editType === 'edit') {
			$.ajax({
				url: '/app/ewords/api/item/delete.php',
				method: 'post',
				data: {id: ew.editTargetId}
			});
		}


		ew.save(ew.registBean, function () {
			// rendering.
			ew.closeDialog();

			// 見た目の初期化
			$('#cancelBtn').click();
			$inputEnglish.html($inputEnglish.data('placeholder')).addClass('fcLightGray');
			$inputJapanese.html($inputJapanese.data('placeholder')).addClass('fcLightGray');
			$('#inputEnglish2').html('');
			$('#inputJapanese2').html('');
			$('#inputRating span').removeClass('on').html('☆');

			// refresh.
			initializeRegistBean();

			// アクティビティ数の更新
			ew.refreshDailyActivity();

			if (util.isOffLine()) {
				alert('オフラインのため、一時的にローカルへデータを保存しました。オンラインになり次第、サーバーへ同期されます。');
			}
		});


	});


	// キャンセルボタン
	$('#cancelBtn').click(function () {
		$inputEnglish = $('#inputEnglish');
		$inputJapanese = $('#inputJapanese');
		$('#inputEnglish').html($inputEnglish.data('placeholder')).addClass('fcLightGray');
		$('#inputJapanese').html($inputJapanese.data('placeholder')).addClass('fcLightGray');
		$('#inputEnglish2').html('');
		$('#inputJapanese2').html('');
		$('#inputRating span').removeClass('on').html('☆');
		$('#registBtn').val('登録する');
		$('#cancelBtn').addClass('hidden');

		ew.editType = null;
		ew.editTargetId = null;
	});


	// 入力の値が変わったら、タグとか改行はトリムする。
	var trimOnChange = function () {
		// console.debug('trimOnChange');
		var $this = $(this);
		var trimedInput = ew.trimInput($this.html(), {dontWhiteSpace:true});
		$this.html(trimedInput);
	};
	$inputEnglish.on('keyup', trimOnChange);
	$inputJapanese.on('keyup', trimOnChange);


	// 選択範囲のチェック
	$(document).on('mouseup', function () {
		checkSelection();
		ew.higlightInput('en');
		ew.higlightInput('jp');
	});
	// iPhone,iPadの場合には、mouseupとかが反応しないので、定期的にチェック
	if (util.isIphone() || util.isIpad()) {
		console.debug('iphone!! check selection per 500ms.')
		setInterval(function () {
			checkSelection(function () {
				ew.higlightInput('en');
				ew.higlightInput('jp');
			});
		}, 1000);
	}
	var checkSelection = function (callbackWhenSelectionChanged) {
		// console.debug('checkSelection');

		var
			selection = window.getSelection(),
			bean = ew.registBean;


		// check selection exists.
		if (!selection || !selection.extentNode) {
			// console.debug('aaa');
			return;
		}

		// check target node.
		var targetType;
		var extentNode = selection.extentNode;
		if (extentNode.parentNode.id === 'inputEnglish') {
			targetType = 'en';
		} else if (extentNode.parentNode.id === 'inputJapanese') {
			targetType = 'jp';
		} else {
			// console.debug('bbb', extentNode.id, extentNode);
			return;
		}

		// get range.
		var range = [
				min(selection.anchorOffset, selection.focusOffset),
				max(selection.anchorOffset, selection.focusOffset),
			];
		if (range[0] === range[1]) {
			// console.debug('ccc', range);
			return;  // no selection.
		}
		console.debug('range: ', range);


		// 既に同じ選択範囲を持っていたら、何もしない。
		var ranges = (targetType === 'en' ? bean.rangesEN : bean.rangesJP);
		for (var i = 0; i < ranges.length; i++) {
			var aRange = ranges[i];
			aRange = [parseInt(aRange[0]), parseInt(aRange[1])];
			if (aRange[0] === range[0] && aRange[1] === range[1]) {
				console.debug('already same range exists.', range, ranges);
				return;
			}
		}

		// 重複する範囲があれば、削除する。
		var newRanges = [];
		for (var i = 0; i < ranges.length; i++) {
			var aRange = ranges[i];
			if (range[0] <= aRange[1] && range[1] >= aRange[0]) {
				// dupulicate.
			} else {
				newRanges.push(aRange);
			}
		}

		// 新しい範囲も追加する。
		newRanges.push(range);

		// 若い順にソート
		newRanges.sort(function (o1, o2) {return (o1[0] - o2[0]);});

		// set.
		if (targetType === 'en') {
			bean.rangesEN = newRanges;
		} else {
			bean.rangesJP = newRanges;
		}

		// debug.
		console.debug('range=', range, ', ranges=', newRanges);

		// callback.
		callbackWhenSelectionChanged && callbackWhenSelectionChanged();
	};



	// テキスト変更の処理
	var changeTextEvent = function (e) {
		var $this = $(this);
		var text = ew.trimInput($this.html());
		var textSize = text.length;
		console.debug('changeTextEvent: ', text, this.id, textSize, e);

		// レンジから外れたらそのレンジを削除する
		var ranges = (this.id === 'inputEnglish' ? ew.registBean.rangesEN : ew.registBean.rangesJP);
		var newRanges = [];
		for (var i = 0; i < ranges.length; i++) {
			var aRange = ranges[i];
			if (aRange[0] < textSize) {
				newRanges.push(aRange);
			}
		}

		var type;
		if (this.id === 'inputEnglish') {
			ew.registBean.rangesEN = newRanges;
			type = 'en';
		} else {
			ew.registBean.rangesJP = newRanges;
			type = 'jp';
		}

		// シフトキーだった場合には、選択範囲を最新にする
		// checkSelection
		var SHIFT_KEY_CODE = 16;
		if (e.which === SHIFT_KEY_CODE) {
			checkSelection();
		}


		// 登録されたレンジよりも前で、文字の削除/挿入がされた場合に、レンジがずれないように調整する.
		var selection = window.getSelection();
		if (selection.anchorOffset, selection.focusOffset) { // that is "Caret"
			var pos = selection.anchorOffset;
			var oldTextSize = (this.id === 'inputEnglish' ? ew.registBean.english : ew.registBean.japanese).length;
			if (oldTextSize < textSize) { // increment
				newRanges.forEach(function (range) {
					if (pos < range[0]) {
						range[0]++;
						range[1]++;
					} else if (range[0] <= pos && pos <= range[1]) {
						range[1]++;
					}
				});
			} else if (textSize < oldTextSize) { // decrement
				newRanges.forEach(function (range) {
					if (pos < range[0]) {
						range[0]--;
						range[1]--;
					} else if (range[0] <= pos && pos <= range[1]) {
						range[1]--;
					}
				});
			}
		}

		// 登録しておく
		if (this.id === 'inputEnglish') {
			ew.registBean.english = text;
		} else {
			ew.registBean.japanese = text;
		}

		// 表示を最新化
		ew.higlightInput(type);

	};
	$('#inputEnglish, #inputJapanese').on('keyup', changeTextEvent);
	$('#inputEnglish, #inputJapanese').dblclick(function () {
		console.debug('dbclick to input area.');

		setTimeout(function () {
			checkSelection();
			var type;
			if (this.id === 'inputEnglish') {
				type = 'en';
			} else {
				type = 'jp';
			}
			ew.higlightInput(type);
		}, 100);
	});

})();







