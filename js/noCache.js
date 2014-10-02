/**
	HTML5 App Cache Manager.
*/
;(function () {

	var appCache = window.applicationCache;
	var alreadyFired = false;

	// checking.
	appCache.addEventListener('checking', function (e) {
		console.debug('[APPCACHE] checking...');
		alreadyFired = true;
	}, false);

	// noupdate.
	appCache.addEventListener('noupdate', function () {
		console.debug('[APPCACHE] noupdate.');
	}, false);

	// downloading.
	appCache.addEventListener('downloading', function (e) {
		console.debug('[APPCACHE] downloading...');
	}, false);

	// progress.
	appCache.addEventListener('progress', function (e) {
		console.debug('[APPCACHE] progress...', e.loaded, '/', e.total);
	}, false);

	// cached. fired only at the frist time.
	appCache.addEventListener('cached', function (e) {
		console.debug('[APPCACHE] cached.');
	}, false);

	// error, occurred at downloading.
	appCache.addEventListener('error', function (e) {
		console.debug('[APPCACHE] download failed.', e);
	}, false);

	// update ready.
	appCache.addEventListener('updateready', function () {
		console.debug('[APPCACHE] updateready.');
		appCache.swapCache();

		if (window.confirm('新しいアプリケーションのバージョンがあります。更新しますか？')) {
			window.location.reload();
		}
	}, false);


	// start update (checking).
	setTimeout(function () {
		if (!alreadyFired) {
			appCache.update();
		}
	}, 1500);


})();
















