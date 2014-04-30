<?php
#
# DB Utility
#
require_once dirname(__FILE__)."/Util.php";
define("APP_ROOT", dirname(__FILE__)."/..");

# Create Connection
function dbCreateConnection () {

	if (Util::isLocal()) {
		$dbSettings = json_decode(file_get_contents(APP_ROOT.'/settings/database.json'));
	} else {
		$dbSettings = json_decode(file_get_contents(APP_ROOT.'/settings/database_server.json'));
	}

	// connect.
	$link = mysql_connect($dbSettings->host, $dbSettings->user, $dbSettings->password);

	// set charset, for using Japanese characters.
	mysql_set_charset("utf8");

	return $link;
}


# Identify Database.
function dbUseDB ($link) {
	return mysql_select_db("yoheim_ewords", $link);
}



# Close Connection.
function dbCloseConnection ($link) {
	mysql_close($link);
}


?>

