<?php
	# アイテムに対して何を行うかを問う確認ダイアログ
?>
<div id="blackout" class="blackout hidden"></div>
<div id="confirmDialog" class="confirmDialog hidden">
	<h4>何をしますか？</h4>
	<div class="text mb10" data-type="english"></div>
	<div class="text" data-type="japanese"></div>
	<input type="button" id="editBtn" class="dialogBtn" value="編集する"/>
	<input type="button" id="doneENBtn" class="dialogBtn enDoneBtn" value="完了する(English)"/>
	<input type="button" id="doneJPBtn" class="dialogBtn jpDoneBtn" value="完了する(Japanese)"/>
	<input type="button" id="liveBtn" class="dialogBtn liveBtn" value="復活させる"/>
	<input type="button" id="deleteBtn" class="dialogBtn" value="削除する"/>
	<input type="button" id="closeDialogBtn" class="dialogBtn" value="閉じる"/>
</div>
