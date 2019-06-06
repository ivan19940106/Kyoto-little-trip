$(document).ready(function(){
	
	$('#latest-article').hide();
	$('#latest-article').slideDown(1000);
	
	$('#menu-trigger').click(function(e){
		e.preventDefault();
		$('.icon-menu').toggle();
		$('.icon-cancel').toggle();
		$('.nav').fadeToggle();
	});
	
});
