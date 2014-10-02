

// TopページのUI
(function () {

	// Alias.
	var util = ew.util,
		db = ew.db;




	var topList = [];


	// topページを表示する
	ew.showTopPage = function () {

		$('[data-content]').addClass('hidden');
		$('[data-content="top"]').removeClass('hidden');

		// rendering function.
		var renderTopList = function (itemList) {
			var $template = $.templates('#topListTemplate');
			var $parent = $('#topList').empty();
			for (var i = 0; i < itemList.length; i++) {
				var item = itemList[i];
				try {
					var json = JSON.parse(item.json);
					$parent.append($template.render({
						id: item.id,
						time: ew.convertDispTime1(item.insTime),
						userId: item.user_id,
						japanese: json.japanese,
						japanese_deco: ew.createHighlightText(json.japanese, json.rangesJP),
						english: json.english,
						english_deco: ew.createHighlightText(json.english, json.rangesEN),
					}));
				} catch (e) {
					continue;
				}
			}
		};


		// loading data.
		if (util.isOnLine()) {
			$.ajax({
				url: './api/item/list.php',
				data: {type: 'recent'},
				dataType: 'json',
				success: function (itemList) {
					topList = itemList;

					// 今後のオフライン賞に、DBへも保存する。
					db.saveTopPageList(itemList);

					// rendering.
					renderTopList(itemList);
				}
			});			
		
		} else {
			var itemList = db.getTopPageList();
			if (itemList) {
				renderTopList(itemList);
			}
		}





		// Forkボタン
		$('#topList').off('click', '.jsFork').on('click', '.jsFork', function (e) {
			var id = $(this).parents('[data-id]').data('id');
			id = parseInt(id);
			console.debug('fork: ', id);

			// 該当を探す
			var item;
			for (var i = 0; i < topList.length; i++) {
				var anItem = topList[i];
				if (parseInt(anItem.id) === id) {
					item = anItem;
					break;
				}
			}
			if (!item) {
				alert('Fork対象が見つかりません');
				return;
			}

			// 既に保有チェック
			var list = ew.list;
			for (var i = 0; i < list.length; i++) {
				if (list[i].id == item.id) {
					alert('既に保有しています');
					return;
				}
			}

			ew.save(JSON.parse(item.json), function () {
				alert('Fork成功しました');
			});

		});
	};

})();




