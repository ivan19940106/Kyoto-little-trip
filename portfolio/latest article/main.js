var clicks = 0;
$(document).ready(function (e) {

	//length
	var length = $('#card-set li').find('.card').length;
	console.log(length);

	// arrange cards
	for (var i = 0; i < length; i++) {
		var t = 374 - 14 * i;
		var w = 280 - 10 * i;
		var z = -1 * i;

		$('#card-set li').eq(i).find('.card').css({ 'top': t + 'px', 'background-color': '', 'width': w + 'px', 'z-index': 5 + z });

	};

	// next card
	$('.next').click(function (e) {
		event.preventDefault();

		if (clicks >= length-1) {
			clicks = length-1;
		} else {
			$('#card-set li').eq(clicks).find('.card').fadeOut(400);
			clicks++;
		}
	});

	// previous card
	$('.prev').click(function (e) {
		event.preventDefault();

		if (clicks <= 0) {
			clicks = 0;
		} else {
			$('#card-set li').eq(clicks - 1).find('.card').fadeIn(400);
			clicks--;
		}
	});
});