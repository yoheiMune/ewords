<?php

# Sign in
#############################################################
require_once "../../modules/DBUtil.php";
require_once "../../modules/Log.php";


# レスポンス設定
header("Content-Type: application/json; charset=utf-8");
header('X-Content-Type-Options: nosniff');


// メソッドチェック
if($_SERVER["REQUEST_METHOD"] != "POST") {
    header("HTTP/1.1 405 Method Not Allowed");
    log_access(405);
    return;
}


# パラメータチェック
if (empty($_POST["user_id"])) {
	header("HTTP/1.1 400 Bad Request");
	echo '{"error_code": 1, "type":"signin", "error": "ユーザーIDを指定して下さい。"}';
	log_access(400);
	return;
}
if (empty($_POST["password"])) {
	header("HTTP/1.1 400 Bad Request");
	echo '{"error_code": 1, "type":"signin", "error": "パスワードを指定して下さい。"}';
	log_access(400);
	return;
}
if (empty($_POST["dispName"])) {
	header("HTTP/1.1 400 Bad Request");
	echo '{"error_code": 1, "type":"signin", "error": "表示名を指定して下さい。"}';
	log_access(400);
	return;
}


# 値の受け取り
$userId = $_POST["user_id"];
$password = $_POST["password"];

# 値の妥当性チェック
$pattern = '/^[a-zA-Z0-9-_]*$/';
if (!preg_match($pattern, $userId)) {
	header("HTTP/1.1 400 Bad Request");
	echo '{"error_code": 1, "type":"signin", "error": "ユーザーIDには、a〜z、A〜Z、0-9、-、_の文字のみで入力して下さい。"}';
	log_access(400);
	return;
}
if (!preg_match($pattern, $password)) {
	header("HTTP/1.1 400 Bad Request");
	echo '{"error_code": 1, "type":"signin", "error": "パスワードには、a〜z、A〜Z、0-9、-、_の文字のみで入力して下さい。"}';
	log_access(400);
	return;
}

# DB接続
$link = dbCreateConnection();
$db = dbUseDB($link);


# パスワードは暗号化する
$password = sha1($_POST["password"]);
# 表示名受け取り
$dispName = mysql_real_escape_string($_POST["dispName"]);


# 重複チェック
$sql = "select * from user where user_login_id='$userId'";
$result = mysql_query($sql);
if ($result && mysql_num_rows($result) > 0) {
	// 重複あり
	header("HTTP/1.1 400 Bad Request");
	echo '{"error_code": 1, "type":"signin", "error": "UserIdは既に存在します。別のIDを入力してください。"}';
	log_info("ユーザー登録失敗：同一ユーザーが存在する。");
	log_access(400);
	mysql_close($link);
	return;
}


# as_idを作成する
$asId = sha1($userId);


# DBへ登録する
$sql = "insert into user (user_login_id, as_id, password, disp_name) values ('$userId', '$asId', '$password', '$dispName')";
$result = mysql_query($sql);
if (!$result) {
	header("HTTP/1.1 500 Server Error");
	echo '{"error_code": 9, "type":"signin", "error": "サーバーエラーが発生しました。時間をおいてお試しください。"}';
	log_db_error($link, $sql);
	mysql_close($link);
	log_access(500);
	return;

} else {
	// success.
	log_db_update($sql);
}


# DBクローズ
mysql_close($link);


# Cookieを設定する
$expire = time() + 60 * 60 * 24 * 30; // 30日
setcookie("ewords_as_id", $asId, $expire, '/');


# 返却
echo '{"message": "success"}';
log_access();
?>









































