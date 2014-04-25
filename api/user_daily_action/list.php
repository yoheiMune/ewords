<?php


require_once "../../modules/DBUtil.php";
require_once "../../modules/Log.php";

// TODO
// headerチェック
// $headers = getallheaders();
// if ($headers["X-Requested-With"] != "XMLHttpRequest") {
//   header("HTTP/1.1 403 Forbidden");
//   exit;
// }

// 値の受け取り
// $english  = $_POST["english"];
// $japanese = $_POST["japanese"];
// $rating   = $_POST["rating"];
$userId   = 1; // dummy

// TODO パラメーターチェック


$link = dbCreateConnection();
$db = dbUseDB($link);

// 検索
$responseJson = array();
$results = mysql_query("select * from user_daily_action where user_id=$userId order by id desc");
if ($results) {
	while ($row = mysql_fetch_assoc($results)) {
		$actions = array();
		$actions['id'] = $row['id'];
		$actions['user_id'] = $row['user_id'];
		$actions['yyyymmdd'] = $row['yyyymmdd'];
		$actions['json'] = $row['json'];
		$responseJson[] = $actions;
	}	
} else {
	log_db_error($link, $sql);
}

// DB接続解除
mysql_close($link);

// response.
header("Content-Type: application/json; charset=utf-8");
header('X-Content-Type-Options: nosniff');
echo json_encode($responseJson);
log_access();

?>



























