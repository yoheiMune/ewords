<?php
	# ログインダイアログ
?>
<div id="loginDialogBg" class="whiteout hidden"></div>
<div id="loginDialog" class="dialog loginDialog hidden">
	<div class="loginArea" data-area="login">
		<h2>ログイン</h2>
		<p class="label01">UserID:</p>
		<input type="text" name="userId" />
		<p class="label01">Password:</p>
		<input type="password" name="password" />
		<input type="button" value="LogIn" class="btn wide01 blue"/>
		<a href="#" class="switch jsSwitch">アカウント作成へ -&gt;</a>
	</div>
	<div class="signinArea" data-area="signin">
		<h2>アカウント作成</h2>
		<p class="label01">UserId:</p>
		<input type="text" name="userId" />
		<p class="label01">Display Name:</p>
		<input type="text" name="dispName" />
		<p class="label01">Password:</p>
		<input type="password" name="password" />
		<input id="signinBtn" type="button" value="Create New Account" class="btn wide01 pink"/>
		<a href="#" class="switch jsSwitch">&lt;- ログインへ</a>
	</div>
</div>

