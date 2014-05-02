<?php
	require "./modules/Log.php";
	require "./modules/LoginUtil.php";
	log_access();

	# 未ログインの場合には、Welcomeページへリダイレクトする
	if (!isLogedIn()) {
		header("Location:./welcome.php");
		return;
	}




	$agent = strtolower($_SERVER['HTTP_USER_AGENT']);
	$isSmartPhone = preg_match("/iphone/",$agent) || preg_match("/android/",$agent);
	$isFirefox = preg_match("/FireFox/", $agent);
?>
<!doctype html>
<html lang="jp" manifest="manifest.appcache">
<head>
	<meta charset="UTF-8">
	<?php if($isSmartPhone) {echo '<meta name="viewport" content="width=640">';}?>
	<title>私の英単語帳</title>
	<!--<link rel="stylesheet" href="./css/ewords.css">-->
	<link rel="stylesheet" href="./css/all.css">
</head>
<body>

<!--メインコンテンツ-->
<div id="content" class="content">
	<p style="height:1px; margin:0;"></p>

	<div class="loginUserName">
		<a id="loginLink" href="#">アカウント作成／ログイン</a>
		<div id="loginUserInfo" class="hidden">こんにちは、<span id="loginUserName">英語頑張る</span>さん</div>
	</div>

	<!--タイトル-->
	<h1>私の英単語帳 - online</h1>

	<!--メニューボタン-->
	<div id="menu" class="btn-menu">Menu</div>
	<div id="menuWhiteout" class="whiteout hidden"></div>

	<!--ホーム-->
	<div class="individual pHome" data-content="home">
		<?php include "html/home.php" ?>
	</div>

	<!--トップ-->
	<div class="individual top hidden" data-content="top">
		<div class="component">
			<h2>TOPページ（新着リスト）</h2>
			<div id="topList" class="list"><!--jsrender--></div>
			<div id="welcomeModule" class="hidden">
				<?php //include "html/welcome.php" ?>
			</div>
		</div>
	</div>

	<!--色々-->
	<div class="individual hidden" data-content="setting">
		<div class="component">
			<h2>いろいろページ</h2>
			<br>
			<a href="#" id="logout">ログアウトする</a><br>
			<br>
			<p>お問い合わせ、不具合報告は、contact2yoheim[at]gmail.comへ頂けると幸いです。</p>
		</div>
	</div>

</div> <!--/.content-->


<!--メニュー-->
<?php include "html/menu.php" ?>
<!--ログインダイアログ-->
<?php include "html/login_dialog.php" ?>
<!--確認ダイアログ-->
<?php include "html/action_confirm_dialog.php" ?>
<!--JSレンダーテンプレート（Top用）-->
<?php include "html/template_top_page.php" ?>

<!--スクロールTop-->
<div id="scrollTopBtn" class="scrollTopBtn btn rect60">上へ</div>

<!--同期処理の表示-->
<section id="syncBar" class="syncProcess">
	<div class="animBox"></div>
	<div class="animBox"></div>
	<div class="animBox"></div>
	<div class="animBox"></div>
	<div class="animBox"></div>
	<div class="animBox"></div>
	<div class="animBox"></div>
	<div class="animBox"></div>
	<div class="animBox"></div>
	<div class="animBox"></div>
	<div class="animBox"></div>
	<div class="animBox"></div>
</section>

<!--Notification Template-->
<section id="notificationArea" class="notificationArea"></section>

<!--HTML Template-->
<?php include "html/template.php" ?>


<script type="text/javascript" src="./js/all.js"></script>
<script type="text/javascript" src="./js/noCache.js"></script>
<script>

	// cookieがなければ（=ログインしていなければ）Topを表示して、Welcomeページへ。
	if (ew.util.isLogedIn() === false) {
		// ew.currentPageType = 'top';
		// ew.showTopPage();
		// $('#welcomeModule').removeClass('hidden');
		location.href = './welcome.php';
	}

</script>
</body>
</html>