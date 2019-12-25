console.log("lalala");

var recordIn = new TimelineMax();
recordIn.from(".record", 2 , {
    y: -700,
    ease: Bounce.easeOut
});