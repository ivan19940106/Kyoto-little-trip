function init(){
    TweenMax.to('.cloud-head' ,3 , {
        rotationX : 360,
        transformOrigin : 'left  50% -700',
        transformPerspective: 1500,
        ease: Bounce.easeOut
    });
    TweenMax.to('.cloud-tail' ,3 , {
        rotationX : 360,
        transformOrigin : 'left  50% -700',
        transformPerspective: 1500,
        ease: Bounce.easeOut
    });
    TweenMax.to('.black-ship' ,2 , {
        rotationY : 360,
        transformOrigin : 'left  50% -700',
        transformPerspective: 100
    });
}
window.addEventListener('load',init);