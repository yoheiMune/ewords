<?php
#
# DBユーティリティ
#

# コネクション作成
function dbCreateConnection () {

	if ($_SERVER["SERVER_NAME"] != 'localhost') {
		$dbSettings = json_decode(file_get_contents('../../settings/database_server.json'));
	} else {
		$dbSettings = json_decode(file_get_contents('../../settings/database.json'));		
	}

	// DB接続
	$link = mysql_connect($dbSettings->host, $dbSettings->user, $dbSettings->password);
	
	// 文字コード指定
	mysql_set_charset("utf8"); 

	return $link;
}



#データベース指定
function dbUseDB ($link) {
	return mysql_select_db("yoheim_ewords", $link);
}



#データベースコネクション閉じる
function dbCloseConnection ($link) {
	mysql_close($link);
}


?>