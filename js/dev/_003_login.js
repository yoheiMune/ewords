// ログイン系
;(function () {

	var util = ew.util;

	var $loginDialog = $('#loginDialog');


	// Public
	//======================================================

	// ログインダイアログを開く
	ew.showLoginDialog = function (targetView) {

		// 表示項目を初期化する
		$('.dialog input[type="text"], .dialog input[type="password"]').val('');

		// 表示Viewを制御
		if (!targetView || targetView === 'login') {
			$loginDialog.removeClass('typeSignIn');
		} else {
			$loginDialog.addClass('typeSignIn');
		}

		$('#loginDialogBg').css('height', $(document).height() + 'px');
		$('#loginDialogBg').removeClass('hidden');
		$('#loginDialog').removeClass('hidden');
	};

	// ログインダイアログを閉じる
	ew.closeLoginDialog = function () {
		$('#loginDialogBg').addClass('hidden');
		$('#loginDialog').addClass('hidden');
	};


	// アカウント作成・ログインリンクを踏んだらダイアログを表示
	$('#loginLink').on('click', ew.showLoginDialog);





	// ログイン、サインインの切替
	$('#loginDialog').on('click', '.jsSwitch', function () {
		$('#loginDialog').toggleClass('typeSignIn');
	});

	// 背景をクリックで閉じる
	$('#loginDialogBg').on('click', ew.closeLoginDialog);


	ew.sendAjax = function (options) {
		$.ajax({
			url: options.url,
			method: 'post',
			data: options.data,
			dataType: 'json',
			success: function (result) {
				options.success && options.success(result);
			},
			error: function (xhr, textStatus, err) {
				console.debug('error.', xhr, textStatus, err);
				alert(xhr.responseJSON.error);
			}
		});
	};


	// ログインする
	$('[data-area="login"]').on('click', 'input[type="button"]', function () {
		var userId = $('[data-area="login"] [name="userId"]').val();
		var password = $('[data-area="login"] [name="password"]').val();



		ew.ajax({
			url: './api/user/login.php',
			data: {
				user_id: userId,
				password: password
			},
			method: 'post',
			success: function (result) {

				ew.util.refreshLoginUserName();

				alert(result.message);
				ew.closeLoginDialog();

				// 同期処理を開始する.
				ew.syncManager.startTask();
			}
		});
	});



	// サインインする
	var $sUserInput = $('[data-area="signin"] [name="userId"]');
	var $sPasswordInput = $('[data-area="signin"] [name="password"]');
	var $sDispNameInput = $('[data-area="signin"] [name="dispName"]');
	$('#signinBtn').on('click', function () {

		// 値を取得
		var userId = $sUserInput.val();
		var password = $sPasswordInput.val();
		var dispName = $sDispNameInput.val();

		// check.
		var errors = [];
		util.isEmpty(userId) && errors.push('ユーザーIDを入力してください。');
		util.isEmpty(password) && errors.push('パスワードを入力してください。');
		util.isEmpty(dispName) && errors.push('表示名を入力してください。');
		if (errors.length !== 0) {
			alert(errors.join('\n'));
			return;
		}

		// API実行
		ew.sendAjax({
			url: './api/user/signin.php',
			data: {
				user_id: userId,
				password: password,
				dispName: dispName
			},
			success: function (result) {
				// ログインユーザー名の表示を切り替える.
				ew.util.refreshLoginUserName();

				alert(result.message || result.error);
				ew.closeLoginDialog();

				// 同期処理を開始する.
				ew.syncManager.startTask();
			}
		});
	});





	// イベント登録
	//======================================================
	$('body').on('click', '[data-action="showCreateAccountDialog"]', function () {
		console.debug('showCreateAccountDialog is called.');
		ew.showLoginDialog('signin');
	});
	$('body').on('click', '[data-action="showLoginDialog"]', function () {
		console.debug('showLoginDialog is called.');
		ew.showLoginDialog();
	});






















})();

