console.log("lalala");

var recordIn = new TimelineMax();
recordIn.from(".record", 2 , {
    y: -700,
    ease: Bounce.easeOut
});

$(".record").click(function(e){
    $("iframe").attr('src','https://www.youtube.com/embed/86wypSCXK9M?autoplay=1');
});