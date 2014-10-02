<?php
#
# Utility
#
class Util {

	public static function isLocal () {
		return $_SERVER["SERVER_NAME"] == 'localhost';
	}
}

?>