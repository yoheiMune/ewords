<?php
#
# Utility - Log
#

### Settings.
##############################################
# Consts - LOG FILE NAME
define("LOG_FILE_PATH", dirname(__FILE__) . "/../logs/app.log");
define("LOG_FILE_DB_UPDATE_PATH", dirname(__FILE__) . "/../logs/db_update.log");
# Timezone
date_default_timezone_set('Japan');



### Inner Methods.
##############################################
# Output.
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



### Public Methods.
##############################################
# Log - Access
function log_access ($statusCode=200, $message="") {
	$msg = "$statusCode, $message";
	_log_output("ACCESS", $msg);
}

# Log - Info
function log_info ($message) {
	_log_output("INFO", $message);
}

# Log - DBError
function log_db_error ($link, $sql="") {
	$errno  = mysql_errno($link);
	$errmsg = mysql_error($link);
	$message = "Failed DB Operation。sql=$sql, errno=$errno, errmsg=$errmsg";
	_log_output("ERROR", $message);
}


# Log - DBUpdate
function log_db_update ($sql) {
	_log_output("DBLOG", $sql, LOG_FILE_DB_UPDATE_PATH);
}

?>