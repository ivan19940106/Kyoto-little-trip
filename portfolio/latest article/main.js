$(document).ready(function(e){
	
	//arrange cards
	for(var i = 0; i<6; i++){
		
		var t = 374-14*i;
		var w = 280-10*i;
		var z = -1*i;
		
		$('#card-set li').eq(i).find('.card').css({'top':t +'px','background-color':'','width': w + 'px','z-index':5 + z});
		
	};
	
	//next card
	var clicks = -1;
	$('.next').click(function(e){
		event.preventDefault();

		function clickCounter(){
			clicks = clicks +1;
			if(clicks > 5){
				clicks = 5;
			}
			return clicks;
		};

		clickCounter();
		$('#card-set li').eq(clicks).find('.card').fadeOut(400);

	});


	//previous card
	$('.prev').click(function(e){
		event.preventDefault();

		function clickCounter(){
			clicks = clicks -1;
			if(clicks < -1){
				clicks = -1;
			}
			return clicks;
		};

		clickCounter();
		$('#card-set li').eq(clicks).find('.card').fadeIn(400);

	});
	
});