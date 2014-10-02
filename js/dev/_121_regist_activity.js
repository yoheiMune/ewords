

// アクティビティUI
(function () {
	// 日々の行動を取得
	ew.refreshDailyActivity();
	// 切替処理
	$('#switchDailyAction').on('click', function () {
		$(this).toggleClass('on');
		$('#dailyActionList').toggleClass('hidden');
	});
})();




