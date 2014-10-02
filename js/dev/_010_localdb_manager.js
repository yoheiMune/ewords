/**
	ローカル環境のデータ管理を行う機能。
*/
;(function () {

	// NameSpace.
	//=====================================================================
	window.ew = window.ew || {};
	var db = window.ew.db = {};




	// Private Functions.
	//=====================================================================

	// Const, defines.
	var KEY_PREFIX = 'ewords_';
	var KEY_TASK_QUEUE = KEY_PREFIX + 'task_queue';
	var KEY_TOP_LIST = KEY_PREFIX + 'top_list';
	var KEY_MYPAGE_LIST = KEY_PREFIX + 'mypage_list';
	var KEY_DAILY_LIST =  KEY_PREFIX + 'daily_list';


	// variables.
	var storage = window.localStorage;

	// save.
	var _saveToStorage = function (key, obj) {
		var json = JSON.stringify(obj);
		storage.setItem(key, json);
	}
	// get.
	var _getFromStorage = function (key) {
		var jsonString = storage.getItem(key);
		return jsonString ? JSON.parse(jsonString) : null;		
	}




	// Public.
	//=====================================================================
	db.KEY = {
		TASK_QUEUE: KEY_PREFIX + 'task_queue',
		TOP_LIST: KEY_PREFIX + 'top_list',
		MYPAGE_LIST: KEY_PREFIX + 'mypage_list',
		DAILY_LIST: KEY_PREFIX + 'daily_list',
	};

	db.save = function (key, value) {
		_saveToStorage(key, value);
	}

	db.select = function (key) {
		return _getFromStorage(key);
	}


// リファクタリング中.


	// タスクキュー
	db.saveTaskQueue = function (array) {
		_saveToStorage(KEY_TASK_QUEUE, array);
	}
	db.getTaskQueue = function () {
		return _getFromStorage(KEY_TASK_QUEUE);
	}


	// TOPページ用リスト
	db.saveTopPageList = function (array) {
		_saveToStorage(KEY_TOP_LIST, array);
	};
	db.getTopPageList = function () {
		return _getFromStorage(KEY_TOP_LIST);
	}

	// マイページ用リスト
	db.saveMyPageList = function (array) {
		_saveToStorage(KEY_MYPAGE_LIST, array);
	};
	db.getMyPageList = function () {
		return _getFromStorage(KEY_MYPAGE_LIST);
	}







































})();