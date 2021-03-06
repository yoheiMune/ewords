// 基本機能
(function () {

	// namespace.
	window.ew = window.ew || {};


	// short name.
	var
		emptyFuncion = function () {};


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
				url: './api/item/add.php',
				method: 'post',
				data: data
			});
			callback && callback();

		},

		// 日々の状況を最新化する
		refreshDailyActivity: function () {
			$.ajax({
				url: './api/user_daily_action/list.php',
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
		parseJsonString: function (jsonString) {
			try {
				return JSON.parse(jsonString);
			} catch (e) {
				console.error('json parse error: ', e, jsonString);
				return null;
			}
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
					url: './api/user/user.php',
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
		createHTML: function (templateId, data) {

			var templateString = $('#' + templateId).html();

			this.each(data, function (value, key) {
				var repKey = '{{' + key + '}}';
				templateString = templateString.replace(new RegExp(repKey, 'g'), value);
			});

			return templateString;
		},
		isArray: function (obj) {
			return Object.prototype.toString.call(obj) == '[object Array]';
		},
		each: function (obj, iterator, context) {
			if (this.isArray(obj)) {
				obj.forEach(function (value, index) {
					iterator.call(context, value, index, obj);
				});
			} else {
				Object.keys(obj || {}).forEach(function (prop) {
					iterator.call(context, obj[prop], prop);
				});
			}
		},
		arrayCopy: function (array) {
			var array2 = [];
			array.forEach(function (item) {
				array2.push(item);
			});
			return array2;
		}
	};



	/**
	 * Ajax
	 */
	 ew.ajax = function (jQueryAjaxOption) {

	 	var orgnErrorFunc = jQueryAjaxOption.error;

	 	// switch error handler.
	 	jQueryAjaxOption.error = function (jqXHR, textStatus, errorThrown) {
	 		console.debug('[ajaxerror]', jqXHR, textStatus, errorThrown);

	 		// Not Authorized
	 		if (jqXHR.status === 403) {
	 			alert('認証されていません、ログインしてください.');
	 			ew.showLoginDialog();
	 		}

	 		// Other.
	 		var errorMessage = (jqXHR.responseJSON ? jqXHR.responseJSON.error : '');
	 		if (errorMessage) {
	 			alert(errorMessage);
	 		} else {
	 			alert('エラーが発生しました.\n時間をおいてから再度お試しください.');
	 		}

	 		// invoke Original Error Handler.
	 		if (orgnErrorFunc) {
	 			return orgnErrorFunc(jqXHR, textStatus, errorThrown);
	 		}
	 	};

	 	// dataType.
	 	jQueryAjaxOption.dataType = jQueryAjaxOption.dataType || 'json';


	 	// execute.
	 	$.ajax(jQueryAjaxOption);

	 };


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
