var clicks = 0;
var clicksAtelier = 0;
$(document).ready(function(e){
    // gallery-modal

    //acoustic-guitars
    //show modal
    $(".canvas a.guitars").click(function(e){
        event.preventDefault();
        window.scrollTo(0,0);
        $(".modal").addClass("show-modal");
        $("body").addClass("scroll-lock");
        $(".social-media").addClass("hide-social-media");
        //show buttons
        $(".modal-guitars img").eq(clicks).show();
        $(".modal a.prev, .modal a.next").show();
        $(".modal a.close").show();
    });

    //images length
    var len = $(".modal-guitars").find('img').length;
    console.log(len);

    //check button status
    if(clicks<=0){
        $(".modal a.prev").addClass("btn-disabled");
    } else{
        $(".modal a.prev").removeClass("btn-disabled");
    }

    //next
    $("a.next").click(function(e){
        event.preventDefault();
        if(clicks>=len -1){
            clicks = len -1;
        } else {
        $(".modal-guitars img").eq(clicks).fadeOut(500);
        $(".modal-guitars img").eq(clicks + 1).fadeIn(500);
        clicks++;
        }
        //check button status
        if(clicks>=len -1){
        $(".modal a.next").addClass("btn-disabled");
        } else if(clicks<=len){
        $(".modal a.next").removeClass("btn-disabled");
        }
        //check button status
        if(clicks<=0){
            $(".modal a.prev").addClass("btn-disabled");
        } else{
            $(".modal a.prev").removeClass("btn-disabled");
        }
    });

    //previous
    $("a.prev").click(function(e){
        event.preventDefault();
        if(clicks<=0){
            clicks = 0;
        } else {
        $(".modal-guitars img").eq(clicks).fadeOut(500);
        $(".modal-guitars img").eq(clicks - 1).fadeIn(500);
        clicks--;
        }
        //check button status
        if(clicks>=len){
            $(".modal a.next").addClass("btn-disabled");
            } else if(clicks<=len){
            $(".modal a.next").removeClass("btn-disabled");
            }
        //check button status
        if(clicks<=0){
        $(".modal a.prev").addClass("btn-disabled");
        } else if(clicks>=0){
        $(".modal a.prev").removeClass("btn-disabled");
        }
    });

    //atelier
    //show modal
    $(".canvas a.atelier").click(function(e){
        event.preventDefault();
        window.scrollTo(0,0);
        $(".modal").addClass("show-modal");
        $("body").addClass("scroll-lock");
        $(".social-media").addClass("hide-social-media");
        //show buttons
        $(".modal a.prev-atelier, .modal a.next-atelier").show();
        $(".modal a.prev-atelier, .modal a.next-atelier").removeClass("btn-hide");
        $(".modal a.prev-atelier, .modal a.next-atelier").show();
        $(".modal a.close").show();
        $(".modal-atelier img").eq(clicksAtelier).show();
    });

    //images length
    var lenAtelier = $(".modal-atelier").find('img').length;
    console.log(lenAtelier);

    //check button status
    if(clicksAtelier<=0){
        $(".modal a.prev-atelier").addClass("btn-disabled");
    } else{
        $(".modal a.prev-atelier").removeClass("btn-disabled");
    }

    //next
    $("a.next-atelier").click(function(e){
        event.preventDefault();
        if(clicksAtelier>=lenAtelier -1){
            clicksAtelier = lenAtelier -1;
        } else {
        $(".modal-atelier img").eq(clicksAtelier).fadeOut(500);
        $(".modal-atelier img").eq(clicksAtelier + 1).fadeIn(500);
        clicksAtelier++;
        }
        //check button status
        if(clicksAtelier>=lenAtelier -1){
        $(".modal a.next-atelier").addClass("btn-disabled");
        } else if(clicksAtelier<=len){
        $(".modal a.next-atelier").removeClass("btn-disabled");
        }
        //check button status
        if(clicksAtelier<=0){
            $(".modal a.prev-atelier").addClass("btn-disabled");
        } else{
            $(".modal a.prev-atelier").removeClass("btn-disabled");
        }
    });

    //previous
    $("a.prev-atelier").click(function(e){
        event.preventDefault();
        if(clicksAtelier<=0){
            clicksAtelier = 0;
        } else {
        $(".modal-atelier img").eq(clicksAtelier).fadeOut(500);
        $(".modal-atelier img").eq(clicksAtelier - 1).fadeIn(500);
        clicksAtelier--;
        }
        //check button status
        if(clicksAtelier>=lenAtelier){
            $(".modal a.next-atelier").addClass("btn-disabled");
            } else if(clicksAtelier<=len){
            $(".modal a.next-atelier").removeClass("btn-disabled");
            }
        //check button status
        if(clicksAtelier<=0){
        $(".modal a.prev-atelier").addClass("btn-disabled");
        } else if(clicksAtelier>=0){
        $(".modal a.prev-atelier").removeClass("btn-disabled");
        }
    });

    //close modal
    $("a.close").click(function(e){
        event.preventDefault();
        $(".modal").removeClass("show-modal");
        $("body").removeClass("scroll-lock");
        $(".social-media").removeClass("hide-social-media");
        $(".modal a").hide();
        $(".modal img").hide();
        clicks = 0;
        clicksAtelier = 0;
        console.log(clicks, clicksAtelier);
    });

    //feature model picture switcher
    $(".feature-model .preview img.front").click(function(e){
        $(".feature-model .window img").attr({"src":"./images/jupiter/front.jpg", "alt":"front"});
    });

    $(".feature-model .preview img.body").click(function(e){
        $(".feature-model .window img").attr({"src":"./images/jupiter/body.jpg", "alt":"body"});
    });

    $(".feature-model .preview img.fingerboard").click(function(e){
        $(".feature-model .window img").attr({"src":"./images/jupiter/fingerboard.jpg", "alt":"fingerboard"});
    });

    $(".feature-model .preview img.moon").click(function(e){
        $(".feature-model .window img").attr({"src":"./images/jupiter/moon.jpg", "alt":"moon"});
    });

    $(".feature-model .preview img.cloud").click(function(e){
        $(".feature-model .window img").attr({"src":"./images/jupiter/cloud.jpg", "alt":"cloud"});
    });

    //hamburger menu
    $(".menu").click(function(e){
        if($(".nav").css("display") == "none"){
            $(".hamburger").toggleClass("hide-menu");
            $(".cross").toggleClass("hide-menu");
            $(".nav").slideDown();
        } else if($(".nav").css("display") == "block"){
            $(".hamburger").toggleClass("hide-menu");
            $(".cross").toggleClass("hide-menu");
            $(".nav").slideUp();
        } 
    });

});