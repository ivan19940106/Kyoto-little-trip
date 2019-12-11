var swipe = 0;
$("document").ready(function(e){

    if($(window).width() <= 768){
        //cards length
        var len = $(".models-panel").find('div.models-card').length;
        console.log(len);

        // arrange cards
        for (var i = 0; i < len; i++) {
            var top = 100-14*i;
            var width = 337-10*i;
            var zIndex = len-i;
            $('.models-panel').find('div.models-card').eq(i).css({ 'top': top + 'px', 'width': width + 'px', 'z-index': zIndex });
        };

        // next card
        $("div.models-card").on("swiperight",function(e){
            if (swipe >= len-1) {
                swipe = len-1;
            } else {
                $('.models-panel').find('div.models-card').eq(swipe).css({'transform': 'rotate(30deg)',
                    'transformOrigin': '50% 100%'}).fadeOut(600);
                // $('.models-panel').find('div.models-card').eq(swipe).fadeOut(400);
                swipe++;
            }
        });

        // previous card
        $("div.models-card").on("swipeleft",function(e){
            if (swipe <= 0) {
                swipe = 0;
            } else {
                $('.models-panel').find('div.models-card').eq(swipe - 1).fadeIn(600).css({'transform': 'rotate(0deg)',
                'transformOrigin': '50% 100%'});
                // $('.models-panel').find('div.models-card').eq(swipe - 1).fadeIn(400);
                swipe--;
            }
        });
    }

});