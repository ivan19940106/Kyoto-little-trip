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

	//chart.js
	var ctx = document.getElementById('myChart').getContext('2d');
	var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ['RWD切版', 'JavaScript', 'JS套件應用', 'Vue.js'],
			datasets: [{
				label: 'Ability (Out of 10)',
				data: [8, 7, 6, 5],
				backgroundColor: [
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(54, 162, 235, 0.2)'
				],
				borderColor: [
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(54, 162, 235, 1)'
				],
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true,
						suggestedMax: 10
					}
				}]
			},
			onClick: function(){
				window.location.href = "./portfolio.html#filter";
			}
		}
	});

	//Timeline
	(function() {

		'use strict';
	  
		// define variables
		var items = document.querySelectorAll(".timeline li");
	  
		// check if an element is in viewport
		// http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
		function isElementInViewport(el) {
		  var rect = el.getBoundingClientRect();
		  return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		  );
		}
	  
		function callbackFunc() {
		  for (var i = 0; i < items.length; i++) {
			if (isElementInViewport(items[i])) {
			  items[i].classList.add("in-view");
			}
		  }
		}
	  
		// listen for events
		window.addEventListener("load", callbackFunc);
		window.addEventListener("resize", callbackFunc);
		window.addEventListener("scroll", callbackFunc);
	  
	  })();
});
