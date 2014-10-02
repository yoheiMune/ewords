<?php


require_once "../../modules/DBUtil.php";
require_once "../../modules/LoginUtil.php";
require_once "../../modules/Log.php";

# レスポンス設定
header("Content-Type: application/json; charset=utf-8");
header('X-Content-Type-Options: nosniff');


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
// $userId   = 1; // dummy

// TODO パラメーターチェック


// TOPページ用
if (!empty($_GET["type"]) && $_GET["type"] == "recent") {

    $link = dbCreateConnection();
    $db = dbUseDB($link);

    $sql = "select * from item order by id desc limit 100";
    $results = mysql_query($sql);
    $responseJson = array();
    if ($results) {
        while ($row = mysql_fetch_assoc($results)) {
            $item = array();
            $item['id'] = $row['id'];
            $item['user_id'] = $row['user_id'];
            $item['json'] = $row['json'];
            // $item['insTime'] = time() - strtotime($row['create_at']);
            $item['insTime'] = $row['create_at'];
            $responseJson[] = $item;
        }
    } else {
        log_db_error($link, $sql);
    }

    echo json_encode($responseJson);
    mysql_close($link);
    log_access();
    return;
}











// 誰のを表示するかを特定する
$userId;
if (!empty($_GET["user_id"])) {
    $userId = $_GET["user_id"];
} else if ($userInfo = isLogedIn()) {
    $userId = $userInfo["id"];
} else {
    header("HTTP/1.1 400 Bad Request");
    echo '{"error_code": 1, "type":"list", "error": "不正なリクエストです。"}';
    log_info('不正リクエスト：ログインもしていないし、user_idも指定されていない。');
    log_access(400);
    return;
}

// 値の妥当性チェック
$pattern = '/^[0-9]*$/';
if (!preg_match($pattern, $userId)) {
    header("HTTP/1.1 400 Bad Request");
    echo '{"error_code": 1, "type":"list", "error": "不正なリクエストです。"}';
    log_info("不正リクエスト：指定されたuser_idの形式が不正です。user_id=$userId");
    log_access(400);
    return;
}

$link = dbCreateConnection();
$db = dbUseDB($link);

// 検索する（古い順、全件）
$responseJson = array();
$sql = "select * from item where user_id=$userId order by id asc";
$results = mysql_query($sql);
if ($results) {
    while ($row = mysql_fetch_assoc($results)) {
        $user = array();
        $user['id'] = $row['id'];
        $user['json'] = $row['json'];
        $responseJson[] = $user;
    }
} else {
    log_db_error($link, $sql);
}


// DB接続解除
mysql_close($link);

// response.
echo json_encode($responseJson);
log_access();
?>



























