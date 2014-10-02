<?php

require_once "../../modules/DBUtil.php";
require_once "../../modules/LoginUtil.php";
require_once "../../modules/Log.php";

// TODO
// headerチェック
// $headers = getallheaders();
// if ($headers["X-Requested-With"] != "XMLHttpRequest") {
//   header("HTTP/1.1 403 Forbidden");
//   exit;
// }

// ヘッダ設定
header("Content-Type: application/json; charset=utf-8");
header('X-Content-Type-Options: nosniff');


// メソッドチェック
if($_SERVER["REQUEST_METHOD"] != "POST") {
    header("HTTP/1.1 405 Method Not Allowed");
    log_access(405);
    return;
}


// パラメータチェック
if (empty($_POST["id"])) {
    header("HTTP/1.1 400 Bad Request");
    echo '{"error_code": 1, "type":"item_delete", "error": "指定された値が不正です。"}';
    log_info("IDが指定されていません。");
    log_access(400);
    return;
}


// ログインチェック
$userInfo = isLogedIn();
if (!$userInfo) {
    header("HTTP/1.1 403 NOT AUTHORIZED");
    echo '{"error_code": 1, "type":"item_delete", "error": "認証されていないリクエストです。"}';
    $id = $_POST["id"];
    log_info("未認証で削除APIをコールされました。item_id=$id");
    log_access(403);
    return;
}


// 値の受け取り
$itemId  = $_POST["id"];


# 値の妥当性チェック
$pattern = '/^[a-zA-Z0-9-_]*$/';
if (!preg_match($pattern, $itemId)) {
    header("HTTP/1.1 400 Bad Request");
    echo '{"error_code": 1, "type":"item_delete", "error": "指定された値が不正です。"}';
    log_info("指定されたItemIDが不正です。item_id=$itemId");
    log_access(400);
    return;
}



// // DB接続
$link = dbCreateConnection();
$db = dbUseDB($link);


// 登録する
$userId = $userInfo["id"];
$sql = "delete from item where id=$itemId and user_id=$userId";
$result = mysql_query($sql);
if (!$result) {
	header("HTTP/1.1 500 Server Error");
    echo '{"error_code": 1, "type":"item_add", "error": "サーバーエラーが発生しました。"}';
    log_db_error($link, $sql);
	dbCloseConnection($link);
    log_access(500);
    return;

} else if (mysql_affected_rows($link) == 0) {
    header("HTTP/1.1 400 Item Not Found");
    // echo $insertSQL;
    echo '{"error_code": 1, "type":"item_add", "error": "削除対象が見つかりませんでした。"}';
    log_info("削除対象が見つかりませんでした。item_id=$itemId");
    dbCloseConnection($link);
    log_access(400);
    exit;

} else {
    // success
    log_db_update($sql);
}


// DB接続解除
dbCloseConnection($link);

// response.
echo '{"message": "success"}';
log_access();
?>




