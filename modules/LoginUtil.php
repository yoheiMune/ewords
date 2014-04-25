<?php
require_once "../../modules/DBUtil.php";
require_once "../../modules/Log.php";


# ログイン状態かを確認する
function isLogedIn() {

	#cookieのチェック
	if (empty($_COOKIE['ewords_as_id'])) {
		header("HTTP/1.1 403 Forbidden");
		echo '{"error": "not login1."}';
		return false;
	}

	#as_idの取得
	$asId = $_COOKIE["ewords_as_id"];
	$pattern = '/^[a-zA-Z0-9-_]*$/';
	if (!preg_match($pattern, $asId)) {
		return false;
	}


	# DB上での存在チェック
	$link = dbCreateConnection();
	$db = dbUseDB($link);
	$sql = "select * from user where as_id='$asId'";
	$result = mysql_query($sql);
	if (!$result) {
		log_db_error($link, $sql);
		return false;
	}else if (!$result || mysql_num_rows($result) == 0) {
		header("HTTP/1.1 403 Forbidden");
		echo $sql;
		mysql_close($link);
		return false;
	}

	$row = mysql_fetch_assoc($result);
	$userInfo = array();
	$userInfo["id"] = $row["id"];
	$userInfo["user_login_id"] = $row["user_login_id"];
	$userInfo["json"] = $row["json"];
	$userInfo["as_id"] = $_COOKIE["ewords_as_id"];

	// DB接続終了
	mysql_close($link);

	// ログイン中
	return $userInfo;
}






?>