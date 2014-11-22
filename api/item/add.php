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


// メソッドチェック
if($_SERVER["REQUEST_METHOD"] != "POST") {
    header("HTTP/1.1 405 Method Not Allowed");
    log_access(405);
    return;
}


// ログインチェック
$userInfo = isLogedIn();
if (!$userInfo) {
	log_info("不正リクエスト。ログインせずに登録APIが実行されました。");
	log_access(403);
	return;
}



$debugMessages = array();

// 値の受け取り
$english  = $_POST["english"];
$japanese = $_POST["japanese"];
$rating   = $_POST["rating"];
if (!empty($_POST["rangesEN"])) {
	$rangesEN = $_POST["rangesEN"];
} else {
	$rangesEN = array();
}
if (!empty($_POST["rangesJP"])) {
	$rangesJP = $_POST["rangesJP"];
} else {
	$rangesJP = array();
}
$userId   = (int)$userInfo["id"];

// TODO パラメーターチェック


// データ取得：状態
$done = $_POST["done"];
if (!preg_match('/^[0-9]$/', $_POST["done"])) {
    header("HTTP/1.1 400 Bad Request");
    echo '{"error_code": 1, "type":"item_update", "error": "指定された値が不正です。"}';
    log_info("指定された値が不正です。");
    log_access(400);
    return;
}







$debugMessages['post1'] = $japanese;
$debugMessages['post2'] = $english;
$debugMessages['rangesEN'] = $rangesEN;
$debugMessages['rangesJP'] = $rangesJP;
$debugMessages['done'] = $done;


// TODO 整形処理
// JSでやってる整形処理は、こっちでもやる。


// 設定読み込み
// $dbSettings = json_decode(file_get_contents('../../settings/database.json'));
// $host = $dbSettings->host;
// if ($_SERVER["SERVER_NAME"] != 'localhost') {
// 	$host = "mysql404.db.sakura.ne.jp";
// }

// // DB接続
// $link = mysql_connect($host, $dbSettings->user, $dbSettings->password);
$link = dbCreateConnection();
$db = dbUseDB($link);

// 検索
// $results = mysql_query('select * from user');
// $responseJson = array();
// while ($row = mysql_fetch_assoc($results)) {
// 	$user = array();
// 	$user['id'] = $row['id'];
// 	$user['json'] = $row['json'];
// 	$responseJson[] = $user;
// }

// 登録する
$jsonObj = array();
$jsonObj["english"]  = $english;
$jsonObj["japanese"] = $japanese;
$jsonObj["rangesEN"] = $rangesEN;
$jsonObj["rangesJP"] = $rangesJP;
$jsonObj["rating"] = $rating;
$jsonObj["userId"] = $userId;
$jsonObj["done"] = $done;
$jsonString = json_encode($jsonObj, JSON_UNESCAPED_UNICODE);
$jsonString = mysql_real_escape_string($jsonString);
$debugMessages['encode_json'] = $jsonString;
$insertSQL = "insert into item (user_id, json) values ($userId, '$jsonString');";
$debugMessages['sql'] = $insertSQL;
$result = mysql_query($insertSQL);
$insertId = mysql_insert_id($link);
log_info("insertId = $insertId");
if (!$result) {
	header("HTTP/1.1 500 Server Error");
	log_db_error($link, $insertSQL);
	dbCloseConnection($link);
	log_access(500);
	return;
} else {
	log_db_update($insertSQL);
}


// 当日の登録回数を記録する
date_default_timezone_set('Japan');
$dateString = date('Ymd');
// データ存在確認
$sql = "select * from user_daily_action where user_id=$userId and yyyymmdd=$dateString";
$results = mysql_query($sql);
$row = mysql_fetch_assoc($results);
if ($row) {
	// データが既にある場合
	$id = $row["id"];
	$json = json_decode($row["json"], true);
	$insCount = empty($json["insCount"]) ? 1 : (int)$json["insCount"] + 1;
	$json["insCount"] = $insCount;

	$jsonString = json_encode($json);
	$jsonString = mysql_real_escape_string($jsonString);
	$sql = "update user_daily_action set json='$jsonString' where id=$id";
	$result = mysql_query($sql);
	if (!$result) {
		header("HTTP/1.1 500 Server Error");
		echo '{"error_code": 1, "type":"item_add", "error": "サーバーエラーが発生しました。"}';
		log_db_error($link, $sql);
		dbCloseConnection($link);
		log_access(500);
		return;

	} else {
		log_db_update($sql);
	}

} else {
	// データがない場合
	$json = array();
	$json["insCount"] = 1;
	$jsonString = json_encode($json);
	$jsonString = mysql_real_escape_string($jsonString);
	$sql = "insert into user_daily_action(user_id, yyyymmdd, json) values ($userId, $dateString, '$jsonString')";
	$result = mysql_query($sql);
	if (!$result) {
		header("HTTP/1.1 500 Server Error");
		echo '{"error_code": 1, "type":"item_add", "error": "サーバーエラーが発生しました。"}';
		log_db_error($link, $sql);
		dbCloseConnection($link);
		log_access(500);
		return;
	
	} else {
		log_db_update($sql);
	}
}






// DB接続解除
dbCloseConnection($link);

// response.
header("Content-Type: application/json; charset=utf-8");
header('X-Content-Type-Options: nosniff');
echo '{"message": "success", "id": ' . $insertId . '}';
log_access();

?>



























