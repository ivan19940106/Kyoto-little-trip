$(document).ready(function(){
    $(window).click(function(){
        for(var i=0;i<=42;i++){
            var r = Math.random()*100;
            var g = Math.random()*100;
            var b = Math.random()*255;
            $('svg').find('path').eq(i).attr('fill', `rgb(${r}, ${g}, ${b})`);
        }
    });
});