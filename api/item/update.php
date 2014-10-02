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
if (empty($_POST["id"]) || (empty($_POST["done"]) && $_POST["done"] != 0)) {
    header("HTTP/1.1 400 Bad Request");
    echo '{"error_code": 1, "type":"item_update", "error": "指定された値が不正です。"}';
    log_info("指定された値が不正です1。");
    log_access(400);
    return;
}
$pattern = '/^[0-9]*$/';
if (!preg_match($pattern, $_POST["id"]) || !preg_match($pattern, $_POST["done"])) {
    header("HTTP/1.1 400 Bad Request");
    echo '{"error_code": 1, "type":"item_update", "error": "指定された値が不正です。"}';
    log_info("指定された値が不正です2。");
    log_access(400);
    return;
}



// ログインチェック
$userInfo = isLogedIn();
if (!$userInfo) {
    header("HTTP/1.1 403 NOT AUTHORIZED");
    echo '{"error_code": 1, "type":"item_update", "error": "認証されていないリクエストです。"}';
    $id = $_POST["id"];
    log_info("未認証で削除APIをコールされました。item_id=$id");
    log_access(403);
	return;
}






$debugMessages = array();

// 値の受け取り
$id  = $_POST["id"];
$done = $_POST["done"];
$userId = $userInfo["id"];

// さらにチェック
$done = (int)$done;
if ($done < 0 || 3 < $done) {
    header("HTTP/1.1 400 Bad Request");
    echo '{"error_code": 1, "type":"item_update", "error": "指定された値が不正です。"}';
    log_info("指定された値が不正です。done=$done");
    log_access(403);
    return;
}



// // DB接続
$link = dbCreateConnection();
$db = dbUseDB($link);


// 更新対象を取得する
$results = mysql_query("select * from item where id=$id and user_id=$userId");
$row = mysql_fetch_assoc($results);
if (!$row) {
	header("HTTP/1.1 404 Item Not Found");
	echo '{"error_code": 1, "type":"item_add", "error": "更新対象が見つかりませんでした。"}';
	log_info("更新対象が見つかりませんでした。$item_id=$id");
	log_access(404);
	dbCloseConnection($link);
	return;	
}

// 更新する（doneの場合）

// 更新前の状態を取得しておく
$json = json_decode($row["json"]);
$preDoneStatus = empty($json->done) ? 0 : $json->done;

// ステータスを更新する
$json = json_decode($row["json"]);
$json->done = (int)$done;
$json = json_encode($json, JSON_UNESCAPED_UNICODE);
$json = mysql_real_escape_string($json);
$sql = "update item set json = '$json' where id = $id";
$result = mysql_query($sql);
if (!$result) {
	header("HTTP/1.1 500 Server Error");
	// echo $sql;
	echo '{"error_code": 1, "type":"item_add", "error": "サーバーエラーが発生しました。"}';
	log_db_error($link, $sql);
	dbCloseConnection($link);
	log_access(500);
	return;

} else {
	// success.
	log_db_update($sql);
}


	// 更新回数を記録する
if ($done) {

	date_default_timezone_set('Japan');
	$dateString = date('Ymd');

	// 該当レコードが既に存在するかを確認する。
	$sql = "select * from user_daily_action where user_id=$userId and yyyymmdd=$dateString";
	$results = mysql_query($sql);
	$row = mysql_fetch_assoc($results);
	if ($row) {
		$id = $row["id"];
		$json = json_decode($row["json"], true);
		if ($done == 1 || ($done == 3 && $preDoneStatus == 2)) {
			$enDoneCount = empty($json["enDoneCount"]) ? 1 : (int)$json["enDoneCount"] + 1;
			$json["enDoneCount"] = $enDoneCount;
		}
		if ($done == 2 || ($done == 3 && $preDoneStatus == 1)) {
			$jpDoneCount = empty($json["jpDoneCount"]) ? 1 : (int)$json["jpDoneCount"] + 1;
			$json["jpDoneCount"] = $jpDoneCount;
		}
		if ($done == 3) {
			$bothDoneCount = empty($json["bothDoneCount"]) ? 1 : (int)$json["bothDoneCount"] + 1;
			$json["bothDoneCount"] = $bothDoneCount;
		}

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
			// success.
			log_db_update($sql);
		}

	} else if ($done != 0) { // 新規登録
		$json = array();
		if ($done == 1 || ($done == 3 && $preDoneStatus == 2)) {
			$json["enDoneCount"] = 1;
		} else if ($done == 2 || ($done == 3 && $preDoneStatus == 1)) {
			$json["jpDoneCount"] = 1;
		} else if ($done == 3) {
			$json["bothDoneCount"] = 1;
		}

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
			// success.
			log_db_update($sql);
		}
	}

}





// DB接続解除
dbCloseConnection($link);

// response.
echo '{"message": "success"}';
log_access();
?>



























