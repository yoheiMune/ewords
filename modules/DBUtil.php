<?php
#
# DB Utility
#

# Create Connection
function dbCreateConnection () {

	if ($_SERVER["SERVER_NAME"] != 'localhost') {
		$dbSettings = json_decode(file_get_contents('../../settings/database_server.json'));
	} else {
		$dbSettings = json_decode(file_get_contents('../../settings/database.json'));		
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