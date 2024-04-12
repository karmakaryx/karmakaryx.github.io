'use strict'

	/** 우클릭 방지 */
document.addEventListener('mousedown', function(e) {
	if (e.button == 2) {
		e.preventDefault();
		return false;
	}
});

	/** F12 버튼 방지 */
document.addEventListener('keydown', function(e) {
	if (e.keyCode == 123) {
		e.preventDefault();
		return false;
	}
});
