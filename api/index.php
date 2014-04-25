<?php
#
# ewordsのルートコントローラー
#
# TODO うまくApacheのリライトができないので中断
########################################

// headerチェック
$headers = getallheaders();
if ($headers["X-Requested-With"] != "XMLHttpRequest") {
  // header("HTTP/1.1 403 Forbidden");
  // exit;
}





// response.
header("Content-Type: application/json; charset=utf-8");
header('X-Content-Type-Options: nosniff');
echo '{"aaa" : "bbb"}';


?>