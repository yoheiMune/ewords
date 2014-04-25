/**
	サーバーとローカルの同期を行う.
*/
;(function () {

	// NameSpace.
	//=====================================================================
	window.ew = window.ew || {};
	var syncManager = window.ew.syncManager = {};


	// Private Functions.
	//=====================================================================
	var util = ew.util;
	var db = ew.db;

	// 全件取得する
	var _getAllTasks = function () {
		return db.getTaskQueue() || [];
	}
	// 1件取得して、DBから削除
	var _popTask = function () {
		var tasks = _getAllTasks();
		if (tasks.length > 0) {
			var task = tasks.shift();
			db.saveTaskQueue(tasks);
			return task;

		} else {
			return null;
		}

	}

	// 処理名を取得する
	var _getTaskName = function (type) {
		switch (type) {
			case 'itemUpdate': return 'アイテムの状態変更';
			case 'itemAdd': return 'アイテムの登録';
			default: return 'この処理';
		}
	}

	// タスクキューの最初に追加する
	var _addTaskToTop = function (task) {
		var tasks = _getAllTasks();
		tasks = [task].concat(tasks);
		db.saveTaskQueue(tasks);
	}


	// タスクを実行する
	var _executeTask = function () {
		console.log('_executeTask is called.');

		// offlineならやらない
		if (util.isOffLine()) {
			_hideDisplay();
			console.debug('_executeTask stop. reason=offline.');
			return;
		}

		// Taskがなければやらない
		var aTask = _popTask();
		if (!aTask) {
			_hideDisplay();
			console.debug('_executeTask stop. reason=noTask.');
			return;
		}

		// 処理開始
		_showDisplay();

		$.ajax({
			url: aTask.url,
			method: aTask.method || 'get',
			data: aTask.data || {},
			dataType: 'json',
			success: function (json) {
				console.debug('tasks done. url=', aTask.url, 'result=', json);

				// 通知.
				var message = _getTaskName(aTask.type) + 'が完了しました';
				util.showNotification(message);

				// 何らかの後処理が必要な場合には、それをする.
				_treatAfterExecute(aTask, json);

				// 次のタスクへ
				_executeTask();
			},
			error: function (jqXHR, textStatus, errorThrown) {
				console.debug('tasks error.', jqXHR, textStatus, errorThrown);

				// treat 403.
				if (jqXHR.status === 403) {
					var message = _getTaskName(aTask.type) + 'には認証が必要です。ログインしますか？';
					util.confirmDialog(message, function (result) {
						if (result) {
							_addTaskToTop(aTask);
							ew.showLoginDialog();
							return; // stop task queue.

						} else {
							// TODO どうしようか。このままだとタスクが消えてしまうけど.

						}
					});

					_hideDisplay();
					return;
				}



				// 次のタスクへ
				_executeTask();

				// TODO 400, 404, 500の場合の対応どうしようか。。
				// Timeoutということもあるらしい。
				alert('エラーが発生しました。後でリトライします。code=' + jqXHR.status);
				syncManager.addTask(aTask);
			}
		});
	};


	// サーバーとの同期完了後の、後処理
	var _treatAfterExecute = function (aTask, json) {

		// アイテム新規登録時
		if (aTask.type === 'itemAdd') {

			// DBへ保存.
			var item = {
				id: json.id,
				json: JSON.stringify(aTask.data)
			};
			var itemList = db.getMyPageList() || [];
			itemList.push(item);
			db.saveMyPageList(itemList);

			// リストの最新化
			ew.showItemList(null, {useCache: true});

			return;
		}

		// アイテム更新
		if (aTask.type === 'itemUpdate') {
			// update daily activity.
			ew.refreshDailyActivity();
		}


	};









	// 同期中の表示・非表示
	var _showDisplay = function () {
		$('#syncBar').addClass('show');
	}
	var _hideDisplay = function () {
		// 時間をおかないと短すぎる場合があるため。
		setTimeout(function () {
			$('#syncBar').removeClass('show');
		}, 1200);
	}


	// Public Functions.
	//=====================================================================

	// add task.
	// @param options.url, options.data, options.method
	syncManager.addTask = function (options) {
		var tasks = _getAllTasks();
		tasks.push(options);
		db.saveTaskQueue(tasks);

		// タスク開始
		_executeTask();
	};

	// start task.
	syncManager.startTask = function () {
		_executeTask();
	}






	// Add Fook.
	//=====================================================================
	window.addEventListener('load', function () {
		console.debug('onload: start execute tasks.');
		_executeTask();
	});
	window.addEventListener('online', function () {
		console.debug('become online: start execute tasks.');
		_executeTask();
	});





})();