$(document).ready(function(){
    var vm = new Vue({
        el: '#app',
        data: {
            banner: ['財源廣進'],
            pages: 10,
            year: [2019,2020],
            yearIndex: [['甲','子'],['乙','丑'],['丙','寅'],['丁','卯'],['戊','辰'],['己','巳'],['庚','午'],['辛','未'],['壬','申'],['癸','酉'],['甲','戌'],['乙','亥']],
            solarTerms: ['立春','雨水','驚蟄','春分','清明','穀雨','立夏','小滿','芒種','夏至','小暑','大暑','立秋','處暑','白露','秋分','寒露','霜降','立冬','小雪','大雪','冬至','小寒','大寒'],
            dateTraditional: ['初一'],
            weatherText: ['晴','雨','雲'],
            weatherImagePath: ["./images/sun.png", "./images/umbrella.png", "./images/cloud.png"],
            date: [1],
            month: [1],
            monthEnglish: ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'],
            goodLuck: ['寫扣','嫁娶','出行','喬遷','開光','會親友','動土','訂盟','造屋','理髮','入宅','安床','安葬','納彩'],
            badLuck: ['諸事不宜'],
            weekday: ['一','二','三','四','五','六','日'],
            quote: ["以銅為鏡，可以正衣冠。以古為鏡，可以知興替。以人為鏡，可以明得失。"]
        },
        methods: {
            randomWeatherText: function(){
                return weatherText[Math.floor(Math.random()*2)];
            }
            // randomWeatherImagePath: function(){
                
            // }
        }
    });
    window.vm = vm;

    $(window).resize(function(){
        adaptPages();
    });

    var pages = vm.pages;
    function adaptPages(){
        //arrange calendar pages
        var windowHeight = window.innerHeight;
        var pageWidth = parseInt($('.calendar').eq(0).css('width'));
        var pageHeight = parseInt($('.calendar').eq(0).css('height'));
        for(var i=0;i<pages;i++){
            var top = windowHeight/2-i*2;
            var width = pageWidth-i*2;
            var z = -1*i;
            $('.calendar').eq(i).css({
                top: top+'px',
                width: width+'px',
                'z-index': pages+z
            });
            //banner
            $('.banner').css({
                top: windowHeight/2-pageHeight/2-pages*2+'px',
                transform: 'translate(-50%,-102%)',
                width: width+'px'
            });
        }
    }

    adaptPages();

    var clicks = 0;
    //next page
    $('.next').click(function(event){
        event.preventDefault();
        if(clicks >= pages-1){
            clicks = pages-1
        } else {
            $('.calendar').eq(clicks).slideUp();
            clicks ++;
        }
    });
    //previous page
    $('.prev').click(function(event){
        event.preventDefault();
        if(clicks <= 0){
            clicks = 0;
        } else {
            $('.calendar').eq(clicks).slideDown();
            clicks --;
        }
    });
});