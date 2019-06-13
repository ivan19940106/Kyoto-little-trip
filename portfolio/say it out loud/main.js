$('document').ready(function(){
	
	$('[type="text"]').focus();
	
	$('.input').on('keyup','[type="text"]',function(e){
		if (e.keyCode === 13){
			var input = $('[type="text"]').val();
			$('.content p').append(input + '&nbsp;');
			$('[type="text"]').val(null);
			var br = Math.floor(Math.random() * 10) + 1;
			if (br < 3){
				$('.content p').append('<br>');
			}
		}
	});
	
	$('a').click(function(e){
		var input = $('[type="text"]').val();
		$('.content p').append('&nbsp;' + input);
		$('[type="text"]').val(null);
		var br = Math.floor(Math.random() * 10) + 1;
		if (br < 3){
			$('.content p').append('<br>');
		}
		$('[type="text"]').focus();
	});
	
	$('[type="text"]').focus();
	
});