
// 設定等いろいろ
(function () {

	// ログアウト
	$('#logout').on('click', function (e) {

		$.removeCookie('ewords_as_id', { path: '/' });
		ew.list = [];

		alert('ログアウトしました');

		// ログインユーザー名の表示を切り替える.
		ew.util.refreshLoginUserName({type:'logout'});

		e.preventDefault();
		return false;
	});
})();

