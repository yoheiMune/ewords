<?php
#
# ログ出力をする関数
#

# ログファイル名
define("LOG_FILE_PATH", dirname(__FILE__) . "/../logs/app.log");
define("LOG_FILE_DB_UPDATE_PATH", dirname(__FILE__) . "/../logs/db_update.log");
#define("LOG_ACCESS_FILE_PATH", dirname(__FILE__) . "/../logs/access.log");


# タイムゾーン
date_default_timezone_set('Japan');

# ログフォーマット
function _log_output ($level="INFO", $message, $outputFilePath=LOG_FILE_PATH) {
	$client_ip = $_SERVER["REMOTE_ADDR"];
	$asId = "anonymous($client_ip)";
	if (!empty($_COOKIE['ewords_as_id'])) {
		$asId = substr($_COOKIE['ewords_as_id'], 0, 10);
	}
	$datetime = date("Y/m/d H:i:s", time());
	$request_url = str_replace('/app/ewords', '', $_SERVER["REQUEST_URI"]);
	$msg = "[{$datetime}][$level][{$asId}][{$request_url}] {$message}";
	error_log($msg."\n", 3, $outputFilePath);
}

# アクセスログ
function log_access ($statusCode=200, $message="") {
	$msg = "$statusCode, $message";
	_log_output("ACCESS", $msg);
}

# INFOログ
function log_info ($message) {
	_log_output("INFO", $message);
}

# DBエラーログ
function log_db_error ($link, $sql="") {
	$errno  = mysql_errno($link);
	$errmsg = mysql_error($link);
	$message = "DB処理に失敗しました。sql=$sql, errno=$errno, errmsg=$errmsg";
	_log_output("ERROR", $message);
}


# DB更新処理のログ
function log_db_update ($sql) {
	_log_output("DBLOG", $sql, LOG_FILE_DB_UPDATE_PATH);
}
























?>