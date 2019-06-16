$(document).ready(function(e){
	
	//arrange cards
	for(var i = 0; i<6; i++){
		
		var t = 374-14*i;
		var w = 280-10*i;
		var z = -1*i;
		
		$('#card-set li').eq(i).find('.card').css({'top':t +'px','background-color':'','width': w + 'px','z-index':z});
		
	};
	
	//next card
	var times = -1;
	$('.next').click(function(e){
		event.preventDefault();

		function clickCounter(){
			times = times +1;
			if(times > 5){
				times = 5;
			}
			return times;
		};

		clickCounter();
		$('#card-set li').eq(times).find('.card').fadeOut(400);

	});

	//previous card
	$('.prev').click(function(e){
		event.preventDefault();

		function clickCounter(){
			times = times -1;
			if(times < -1){
				times = -1;
			}
			return times;
		};

		clickCounter();
		$('#card-set li').eq(times).find('.card').fadeIn(400);

	});

// var click = 0;
// $('.prev, .next').mouseover(function(e){
// 	e.preventDefault();
// 	$('.next').click(function(e){
// 		click = click +1;
// 	});
// 	$('.prev').click(function(e){
// 		if(click >= 0){
// 			click = click -1;
// 		}
// 	});
// 	console.log(click);
// });
	
});