
// メニュー機能
(function () {
	var
		$menuBtn = $('#menu'),
		$menuArea = $('#menuArea'),
		$contentArea = $('#content'),
		$whiteOut = $('#menuWhiteout');

		ew.currentPageType = 'home';

	var tapEnable = false;
	$menuBtn.on(ew.EVENT.TOUCH_START, function () {
		tapEnable = true;
		$menuBtn.addClass('on');
	}).on(ew.EVENT.TOUCH_MOVE, function () {
		tapEnable = false;
		$menuBtn.removeClass('on');
	}).on(ew.EVENT.TOUCH_END, function () {
		if (tapEnable) {
			tapEnable = false;
			$menuBtn.removeClass('on');

			$menuArea.addClass('show');
			$contentArea.addClass('menuShow');
			$whiteOut.removeClass('hidden');
		}
	});

	$whiteOut.on('click', function () {
		$menuArea.removeClass('show');
		$contentArea.removeClass('menuShow');
		$whiteOut.addClass('hidden');
	});

	// メニュー押した時の挙動
	$('[data-menu]').on('click', function (e) {
		var type = $(this).data('menu');
		console.debug('type=', type);
		$menuArea.removeClass('show');
		$contentArea.removeClass('menuShow');
		$whiteOut.addClass('hidden');

		if (type === ew.currentPageType)
			return;

		// 現在値の変更
		ew.currentPageType = type;

		// 表示きりかえ
		$('[data-content]').addClass('hidden');
		$('[data-content="'+type+'"]').removeClass('hidden');

		// 表示
		if (type === 'top') {
			ew.showTopPage();
		} else if (type === 'home') {

			// ログインしていなければ、ログインを出す。
			if (!$.cookie('ewords_as_id')) {
				ew.showLoginDialog();
			} else {
				ew.showItemList();
			}

		}

	});


	// メニューを開く
	ew.openMenu = function () {
		$menuArea.addClass('show');
		$contentArea.addClass('menuShow');
		$whiteOut.removeClass('hidden');
	};
	// メニューを閉じる
	ew.closeMenu = function () {
		$menuArea.removeClass('show');
		$contentArea.removeClass('menuShow');
		$whiteOut.addClass('hidden');
	}


})();
