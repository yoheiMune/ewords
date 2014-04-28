// welcome.js
(function () {

var 
	hasTapEvent = ('ontouchstart' in window),
	TOUCH_START = (hasTapEvent ? 'touchstart' : 'mousedown'),
	TOUCH_MOVE  = (hasTapEvent ? 'touchmove' : 'mousemove'),
	TOUCH_END   = (hasTapEvent ? 'touchend' : 'mouseup'),
	enableTap = false
	;


// タップイベント
$('[data-action]').on(TOUCH_START, function () {
	enableTap = true;
	$(this).addClass('on');
}).on(TOUCH_MOVE, function () {
	enableTap = false;
	$(this).removeClass('on');
}).on(TOUCH_END, function (e) {
	if (enableTap) {
		enableTap = false;
		$(this).removeClass('on');
		var action = $(this).data('action');
		actions[action](e);
	}
});


// 各種処理
var actions = {};
actions.showDialog = function (e) {
	var type = $(e.currentTarget).data('type');
	$('#' + type).removeClass('hidden');
};

actions.createAccount = function () {
	var 
		$modal = $('#signinModal'),
		loginId = $modal.find('[name="loginId"]').val(),
		password = $modal.find('[name="password"]').val(),
		displayName = $modal.find('[name="displayName"]').val()
	;

	var messages = [];
	if (!loginId) {messages.push('ログインIDを入力して下さい.')};
	if (!password) {messages.push('ログインパスワードを入力して下さい.')};
	if (!displayName) {messages.push('表示名を入力して下さい.')};
	if (messages.length > 0) {
		alert(messages.join('\n'));
		return;
	}

	$.ajax({
		url: '/app/ewords/api/user/signin.php',
		method: 'POST',
		data: {
			user_id: loginId,
			password: password,
			dispName: displayName
		},
		dataType: 'json',
		success: function (json) {
			alert('登録が完了しました.');
			location.href = '/app/ewords/';
		},
		error: function (jqXHR, textStatus, errorThrown) {
			console.debug('signIn error: ', jqXHR, textStatus, errorThrown);
			try {
				var json = JSON.parse(jqXHR.responseText);
				alert(json.error);
			} catch (e) {
				alert('エラーが発生しました.');
			}
		}
	});
};

actions.login = function () {
	var 
		$modal = $('#loginModal'),
		loginId = $modal.find('[name="loginId"]').val(),
		password = $modal.find('[name="password"]').val()
	;

	var messages = [];
	if (!loginId) {messages.push('ログインIDを入力して下さい.')};
	if (!password) {messages.push('ログインパスワードを入力して下さい.')};
	if (messages.length > 0) {
		alert(messages.join('\n'));
		return;
	}

	$.ajax({
		url: '/app/ewords/api/user/login.php',
		method: 'POST',
		data: {
			user_id: loginId,
			password: password,
		},
		dataType: 'json',
		success: function (json) {
			alert('ログインしました.');
			location.href = '/app/ewords/';
		},
		error: function (jqXHR, textStatus, errorThrown) {
			console.debug('login error: ', jqXHR, textStatus, errorThrown);
			try {
				var json = JSON.parse(jqXHR.responseText);
				alert(json.error);
			} catch (e) {
				alert('エラーが発生しました.');
			}
		}
	});

};


actions.closeModal = function () {
	console.debug('closeModal');
	$('.modal').addClass('hidden');
	return false;
}

actions.eventStop = function (e) {
	e.preventDefault();
	return false;
}







})();