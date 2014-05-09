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
	echo '{"error_code": 1, "type":"login", "error": "ユーザーIDを指定してください."}';
	log_access(400);
	return;
}
if (empty($_POST["password"])) {
	header("HTTP/1.1 400 Bad Request");
	echo '{"error_code": 1, "type":"login", "error": "パスワードを指定してください."}';
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
	echo '{"error_code": 1, "type":"login", "error": "ユーザーIDには、a〜z、A〜Z、0-9、-、_の文字のみで入力して下さい."}';
	log_access(400);
	return;
}
if (!preg_match($pattern, $password)) {
	header("HTTP/1.1 400 Bad Request");
	echo '{"error_code": 1, "type":"login", "error": "パスワードには、a〜z、A〜Z、0-9、-、_の文字のみで入力して下さい."}';
	log_access(400);
	return;
}

# パスワードは暗号化してある対応
$password = sha1($_POST["password"]);


# DB接続
$link = dbCreateConnection();
$db = dbUseDB($link);


# ログインチェック
$sql = "select * from user where user_login_id='$userId' and password='$password'";
$result = mysql_query($sql);
if (!$result || mysql_num_rows($result) == 0) {
	// 存在なし
	header("HTTP/1.1 400 Bad Request");
	echo '{"error_code": 1, "type":"login", "error": "ユーザーIDまたはパスワードが違います."}';
	log_info("ログイン失敗：ユーザー名またはパスワード間違い。");
	mysql_close($link);
	log_access(400);
	return;
}

# as_idを取得して、Cookieに設定する
$row = mysql_fetch_assoc($result);
$asId = $row["as_id"];
$expire = time() + 60 * 60 * 24 * 30; // 30日
setcookie("ewords_as_id", $asId, $expire, '/');

# DBクローズ
mysql_close($link);

# 返却
echo '{"message": "ログインしました."}';
log_access();
?>









































