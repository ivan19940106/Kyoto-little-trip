$(document).ready(function(){
	//show latest article
	$('#latest-article').hide();
	$('#latest-article').slideDown(1000);
	//hamburger-menu
	$('#menu-trigger').click(function(e){
		e.preventDefault();
		$('.icon-menu').toggle();
		$('.icon-cancel').toggle();
		$('.nav').fadeToggle();
	});
	
	//filter
	$('.option').click(function(){
		$('.filter-result ol').addClass('hide-result');
		$(this).toggleClass('selected');
		if($(this).text() == 'Project'){
			$('.project').toggleClass('show-result');
		} else if($(this).text() == 'HTML&CSS'){
			$('.html, .css3, .canvas').toggleClass('show-result');
		} else if($(this).text() == 'JS, jQuery'){
			$('.jquery, .ajax, .tweenmax').toggleClass('show-result');
		} else if($(this).text() == 'Vue.js'){
			$('.vue, .svg').toggleClass('show-result');
		} else if($(this).text() == 'All works'){
			$('.filter-result ol').removeClass('hide-result');
			$('.filter-result ol').addClass('show-result');
			if(!($('.all').hasClass('selected'))){
				$('.option').removeClass('selected');
				$('.filter-result ol').removeClass('show-result');
				$('.filter-result ol').toggleClass('hide-result');
			}
		} 
	});
});
