<?php

# User
#############################################################
require_once "../../modules/DBUtil.php";
require_once "../../modules/LoginUtil.php";
require_once "../../modules/Log.php";


# レスポンス設定
header("Content-Type: application/json; charset=utf-8");
header('X-Content-Type-Options: nosniff');


#検索対象を特定する
$userId;
if (empty($_POST["id"])) {
	# パラメーターがない場合には、自分の情報を返す

	$userInfo = isLogedIn();
	if (!$userInfo) {
		header("HTTP/1.1 403 Not Authorized");
		echo '{"error_code": 1, "type":"user", "error": "ログインしていません。"}';
		log_info("ユーザー検索失敗：ログインしていないリクエスト。");
		log_access(403);
		return;
	}
	$userId = $userInfo["id"];


} else {
	# パラメータがあれば、それを探す.
	$userId = mysql_real_escape_string($_POST["id"]);
}


# DB接続
$link = dbCreateConnection();
$db = dbUseDB($link);


# 検索する
$sql = "select * from user where id='$userId'";
$result = mysql_query($sql);
if (!$result || mysql_num_rows($result) == 0) {
	// 検索結果なし
	header("HTTP/1.1 400 Bad Request");
	echo '{"error_code": 1, "type":"user", "error": "対象が見つかりません"}';
	log_info("ユーザー検索失敗：対象が存在しない。");
	mysql_close($link);
	log_access(400);
	return;

} else {
	$row = mysql_fetch_assoc($result);
	$json = array();
	$json["id"] = $row["id"];
	$json["disp_name"] = $row["disp_name"];
	$json["sql"] = $sql;
	$json["as_id1"] = $userInfo["as_id"];
	$json["as_id2"] = $row["as_id"];

	// DB接続解除
	mysql_close($link);

	// response.
	echo json_encode($json);
	log_access();
}

?>









































