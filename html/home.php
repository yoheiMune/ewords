<?php
	# ホーム
?>
<!--登録UI-->
<section class="component registArea mb50">
	<h2>登録する</h2>
	<p style="font-size: 13px;">Tips. 文字をズズズっとマウスで選ぶと、ハイライトさせる事ができます。</p>
	<div class="relative">
		<div id="inputEnglish2" class="input noBorder abs noAction" contenteditable="true"></div>
		<div id="inputEnglish" class="input relative z2 mb10" contenteditable="true" data-placeholder="英文章を入力してください" tabindex=1></div>
		<a id="cancelHighlightEnglish" class="cancelHighlight" href="#">ハイライトをキャンセル</a>
	</div>
	<div class="relative">
		<div id="inputJapanese2" class="input noBorder abs noAction" contenteditable="true"></div>
		<div id="inputJapanese" class="input relative z2 mb10" contenteditable="true" data-placeholder="日本語訳を入力してください" tabindex=2></div>
		<a id="cancelHighlightJapanese" class="cancelHighlight" href="#">ハイライトをキャンセル</a>
	</div>
	<input id="skipEnglishSelect" type="checkbox"/><label for="skipEnglishSelect">英語への登録はスキップする</label><br><br>
	<input id="registBtn" class="btnLarge" type="button" value="登録する" tabindex=3/>
	<input id="cancelBtn" class="btnLarge ml20 hidden" type="button" value="編集をやめる" tabindex=4/>
</section>

<!--日々の状況-->
<section class="component dailyActionModule">
	<h2>Daily Activity</h2>
	<div id="switchDailyAction" class="switch mt10 mb10">表示/非表示を切り替える</div>
	<div id="dailyActionList" class="dailyActionList hidden"></div>
</section>

<!--一覧UI-->
<section class="component listModule">
	<h2>Vocabulary</h2>
	<!--タブ-->
	<ul class="tab col3 mt8" data-type="tab">
		<li class="selected" data-tab-target="e2j">英→日</li>
		<li data-tab-target="j2e">日→英</li>
		<li data-tab-target="done">完了</li>	
	</ul>
	<div class="tabLine"></div>
	<!--英語から日本語-->
	<div id="listArea" class="listArea" data-tab-dest="e2j"></div>
	<!--日本語から英語-->
	<div id="listDoneEnArea" class="listArea modeJp hidden" data-tab-dest="j2e"></div>
	<!--完了-->
	<div id="listDoneBothArea" class="listArea hidden" data-tab-dest="done"></div>	
</section>
