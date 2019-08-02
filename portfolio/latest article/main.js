var clicks = 0;
$(document).ready(function(e){
	
	//arrange cards
	for(var i = 0; i<6; i++){
		
		var t = 374-14*i;
		var w = 280-10*i;
		var z = -1*i;
		
		$('#card-set li').eq(i).find('.card').css({'top':t +'px','background-color':'','width': w + 'px','z-index':5 + z});
		
	};
	
	//next card
	var currentStatus = '';
	
	$('.next').click(function(e){
		event.preventDefault();
		
		if(clicks > 4){
			clicks = 4;
			$('#card-set li').eq(clicks).find('.card').fadeOut(400);
		} else {
			if (currentStatus == 'prev'){
				$('#card-set li').eq(clicks +1).find('.card').fadeOut(400);
			} else{
				$('#card-set li').eq(clicks).find('.card').fadeOut(400);
				clicks = clicks +1;
			}
		}
		currentStatus = 'next';
		console.log('next' + clicks)

	});


	//previous card
	$('.prev').click(function(e){
		event.preventDefault();
		
		if(clicks <= 0){
			clicks = 0;
			$('#card-set li').eq(clicks).find('.card').fadeIn(400);
		} else {
			if (currentStatus == 'next'){
				$('#card-set li').eq(clicks -1).find('.card').fadeIn(400);
			} else {
				$('#card-set li').eq(clicks).find('.card').fadeIn(400);
				clicks = clicks -1;
			} 
		}
		currentStatus = 'prev';
		console.log('prev' + clicks)

	});
	
});