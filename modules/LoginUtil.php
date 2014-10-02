<?php

require_once dirname(__FILE__)."/DBUtil.php";
require_once dirname(__FILE__)."/Log.php";

# Login Check
function isLogedIn() {

	# not allow empty cookie.
	if (empty($_COOKIE['ewords_as_id'])) {
		header("HTTP/1.1 403 Forbidden");
		echo '{"error": "not login1."}';
		return false;
	}

	# get asId from cookie.
	$asId = $_COOKIE["ewords_as_id"];
	$pattern = '/^[a-zA-Z0-9-_]*$/';
	if (!preg_match($pattern, $asId)) {
		return false;
	}

	# existance check on DB.
	$link = dbCreateConnection();
	$db = dbUseDB($link);
	$sql = "select * from user where as_id='$asId'";
	$result = mysql_query($sql);
	if (!$result) {
		log_db_error($link, $sql);
		return false;
	}else if (!$result || mysql_num_rows($result) == 0) {
		# not found.
		header("HTTP/1.1 403 Forbidden");
		echo $sql;
		mysql_close($link);
		return false;
	}

	# create User Info.
	$row = mysql_fetch_assoc($result);
	$userInfo = array();
	$userInfo["id"] = $row["id"];
	$userInfo["user_login_id"] = $row["user_login_id"];
	$userInfo["json"] = $row["json"];
	$userInfo["as_id"] = $_COOKIE["ewords_as_id"];

	// close DB connection.
	mysql_close($link);

	// that is LogedIn.
	return $userInfo;
}


?>