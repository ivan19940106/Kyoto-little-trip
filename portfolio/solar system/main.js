$(document).ready(function(){
	
	var frequency = ['slow','medium','fast','furious'];
	
	function generateFreq(min,max){
		
		var freq = Math.floor(Math.random()*max-min);
		
		return freq;
		
	}
	
	for (var i =1; i<=11; i++){
		
		var freq = frequency[generateFreq(0,4)];
		
		$('.space div').eq(i).toggleClass(freq);
		
	}
	
	$('.voyager').click(function(e){
		$(this).toggleClass('reverse');
		console.log('ha');
	});
	
});