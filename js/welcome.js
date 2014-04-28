// welcome.js
(function () {

var 
	hasTapEvent = ('ontouchstart' in window),
	TOUCH_START = (hasTapEvent ? 'touchstart' : 'mousedown'),
	TOUCH_MOVE  = (hasTapEvent ? 'touchmove' : 'mousemove'),
	TOUCH_END   = (hasTapEvent ? 'touchend' : 'mouseup'),
	enableTap = false
	;


// タップイベント
$('[data-action]').on(TOUCH_START, function () {
	enableTap = true;
	$(this).addClass('on');
}).on(TOUCH_MOVE, function () {
	enableTap = false;
	$(this).removeClass('on');
}).on(TOUCH_END, function (e) {
	if (enableTap) {
		enableTap = false;
		$(this).removeClass('on');
		var action = $(this).data('action');
		actions[action](e);
	}
});


// 各種処理
var actions = {};
actions.showDialog = function (e) {
	var type = $(e.currentTarget).data('type');
	console.debug('type:', type);
};








})();