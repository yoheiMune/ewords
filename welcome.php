<?php
	$agent = strtolower($_SERVER['HTTP_USER_AGENT']);
	$isSmartPhone = preg_match("/iphone/",$agent) || preg_match("/android/",$agent);
?>
<!doctype html>
<html lang="jp">
<head>
	<meta charset="UTF-8">
	<?php if($isSmartPhone) {echo '<meta name="viewport" content="width=480 user-scalable=no">';}?>
	<title>Welcome to 私の英単語帳-Online</title>
	<link rel="stylesheet" href="./css/welcome.css?_=1">
</head>
<body class="<?php if($isSmartPhone) {echo 'sp';}?>">

<!--Like-->
<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/ja_JP/all.js#xfbml=1&appId=231193763645613";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>



<div class="container">
	<div class="content">
		<?php if($isSmartPhone == false) { ?>
			<img class="thumb1" src="./images/welcome/image01.png" alt="私の英単語帳へようこそ"/>
		<?php } else { ?>
			<img class="thumb2" src="./images/welcome/image02.png" alt="私の英単語帳へようこそ"/>
		<?php } ?>
		<div class="hidden">
			1日1分から初めてみませんか？<br>
			オンライン英単語帳で、気軽に手軽にボキャブラリーを増やしていきましょう！<br>
		</div>
		<div class="text <?php if($isSmartPhone == false) {echo 'hidden';}?>">
			私の英単語帳-Onlineは、英単語や英熟語を覚えるためのオンラインツールです。
			単語を登録して、覚える。シンプルなアプリケーションです。
			PCでもスマートフォンでも、自分の好きな時に、好きな場所で、英語の学習を行うことができます。<br>
		</div>
		<div class="btnArea clearfix">
			<div class="btn" data-action="showDialog" data-type="signinModal">
				<img src="./images/welcome/btn1.png" alt="アカウント作成する"/>
				<img class="on" src="./images/welcome/btn1_on.png" alt="アカウント作成する"/>
			</div>
			<div class="btn" data-action="showDialog" data-type="loginModal">
				<img src="./images/welcome/btn2.png" alt="ログインする"/>
				<img class="on" src="./images/welcome/btn2_on.png" alt="ログインする"/>
			</div>
		</div>
	</div>
</div>


<div class="footer">
	<!--Twitterボタン-->
	<a href="https://twitter.com/share" class="twitter-share-button" data-url="http://www.yoheim.net/app/ewords/" data-via="yoheiMune" data-lang="ja">ツイート</a>
	<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>

	<!--Like Button-->
	<div class="fb-like" data-href="http://www.yoheim.net/app/ewords" data-layout="button_count" data-action="like" data-show-faces="false" data-share="false" style="margin-left:-30px; margin-right:12px;"></div>

	<!--Hatebu-->
	<a href="http://b.hatena.ne.jp/entry/http://www.yoheim.net/app/ewords" class="hatena-bookmark-button" data-hatena-bookmark-title="私の英単語帳-Online" data-hatena-bookmark-layout="standard-balloon" data-hatena-bookmark-lang="ja" title="このエントリーをはてなブックマークに追加"><img src="http://b.st-hatena.com/images/entry-button/button-only@2x.png" alt="このエントリーをはてなブックマークに追加" width="20" height="20" style="border: none;" /></a><script type="text/javascript" src="http://b.st-hatena.com/js/bookmark_button.js" charset="utf-8" async="async"></script>

	<!--Margin, copyright-->
	<?php if($isSmartPhone == false) {?>
		<div class="flex"></div>
		<div class="copyright">created by <a href="/" target="_blank">YoheiM.NET</a></div>
	<?php } ?>
</div>


<div id="signinModal" class="modal signin hidden" data-action="closeModal">
	<div class="content" data-action="eventStop">
		<h2>アカウントを作成する</h2>
		<div class="label">ログインID<span class="caution">（半角英数字のみ）</span>：</div>
		<input type="text" name="loginId"/>
		<div class="label">ログインパスワード<span class="caution">（半角英数字のみ）</span>：</div>
		<input type="password" name="password"/>
		<div class="label">表示名：</div>
		<input type="text" name="displayName"/>
		<div class="btn" data-action="createAccount">
			<img src="./images/welcome/btn1.png" alt="アカウント作成する"/>
			<img class="on" src="./images/welcome/btn1_on.png" alt="アカウント作成する"/>
		</div>
		<div class="closeArea" data-action="closeModal">
			<a href="#">閉じる</a>
		</div>
	</div>
</div>


<div id="loginModal" class="modal login hidden" data-action="closeModal">
	<div class="content" data-action="eventStop">
		<h2>ログインする</h2>
		<div class="label">ログインID：</div>
		<input type="text" name="loginId"/>
		<div class="label">ログインパスワード：</div>
		<input type="password" name="password"/>
		<div class="btn" data-action="login">
			<img src="./images/welcome/btn2.png" alt="ログインする"/>
			<img class="on" src="./images/welcome/btn2_on.png" alt="ログインする"/>
		</div>
		<div class="closeArea" data-action="closeModal">
			<a href="#">閉じる</a>
		</div>
	</div>
</div>





<script src="./js/libs/jquery-2.1.0.min.js" type="text/javascript"></script>
<script src="./js/welcome.js?_=1" type="text/javascript"></script>

</body>
</html>