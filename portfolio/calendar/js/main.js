$(document).ready(function(){
    var vm = new Vue({
        el: '#app',
        data: {
            dateToday: new Date(),
            banner: '財源廣進',
            pages: 10,
            year: [2019,2020],
            yearIndexX: ['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'],
            yearIndexY: ['子','醜','寅','卯','辰','巳','午','未','申','酉','戌','亥'],
            solarTerms: ['立春','雨水','驚蟄','春分','清明','穀雨','立夏','小滿','芒種','夏至','小暑','大暑','立秋','處暑','白露','秋分','寒露','霜降','立冬','小雪','大雪','冬至','小寒','大寒'],
            dateTraditional: ['初一','初二','初三','初四','初五','初六','初七','初八','初九','初十','十一','十二','十三','十四','十五','十六','十七','十八','十九','二十','廿一','廿二','廿三','廿四','廿五','廿六','廿七','廿八','廿九','三十','三一'],
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
            next: function(){
                var nowDateIndex = this.dateToday.getDate();
                if(this.dateToday.getDate()>nowDateIndex){
                    this.dateToday.getDate()=nowDateIndex;
                } else {
                    var update = this.dateToday.setDate(this.dateToday.getDate()+1);
                    this.dateToday = new Date(update);
                }
            },
            prev: function(){
                var nowDateIndex = this.dateToday.getDate();
                if(this.dateToday.getDate()<nowDateIndex){
                    this.dateToday.getDate()=nowDateIndex;
                } else {
                    var update = this.dateToday.setDate(this.dateToday.getDate()-1);
                    this.dateToday = new Date(update);
                }
            }
        },
        computed: {
            yearToday: function(){
                var year = this.dateToday.getFullYear()-1911;
                if(year > 0 && year<10){
                    year = `0${year}`
                } else if(year<0){
                    year = `民國負${year.toString().replace('-','')}`
                } else if(year == 0){
                    year = '民國元';
                }
                return year;
            },
            yearIndexToday: function(){
                var x = 0;
                var y = 0;
                var year = this.dateToday.getFullYear();
                if(year%10-3 > 0){
                    x = year%10-3-1;
                } else if(year%10-3 < 0){
                    x = year%10-3+10-1;
                } else if(year%10-3 == 0){
                    x = 9;
                }
                if(year%12-3 > 0){
                    y = year%12-3-1;
                } else if(year%12-3 < 0){
                    y = year%12-3+12-1;
                } else if(year%12-3 == 0){
                    y = 11;
                }
                return this.yearIndexX[x]+this.yearIndexY[y];
            },
            //based on 2020: http://ihouse.hkedcity.net/~hm1203/atmosphere/climate-china-24.htm
            solarTermsToday: function(){
                if(this.dateToday.getDate()==1){
                    return this.solarTerms[this.dateToday.getMonth()];
                } else if(this.dateToday.getDate()==15){
                    return this.solarTerms[this.dateToday.getMonth()+1];
                } else {
                    return null;
                }
            },
            dateTraditionalToday: function(){
                return this.dateTraditional[this.dateToday.getDate()-1];
            },
            dateOnToday: function(){
                var date = this.dateToday.getDate();
                if(date<10){
                    date = `0${date}`;
                }
                return date;
            },
            monthToday: function(){
                var month = this.dateToday.getMonth()+1;
                return month;
            },
            monthEnglishToday: function(){
                var monthEnglish = this.monthEnglish[this.monthToday-1];
                return monthEnglish;
            },
            weekdayToday: function(){
                var weekday = this.dateToday.getDay();
                return this.weekday[weekday-1];
            }
        }
    });
    window.vm = vm;

    $(window).resize(function(){
        adaptPages();
    });

    //calendar RWD
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
        //controls
        $('.controls').css({
            top: windowHeight/2+pageHeight/2+150+'px'
        });
    }

    adaptPages();

    //arrows
    var clicks = 0;
    //next page
    $('.next').click(function(event){
        event.preventDefault();
        if(clicks >= pages-1){
            clicks = pages-1
        } else {
            $('.calendar').eq(clicks).slideUp();
            //change the weather
            randomWeatherText();
            randomWeatherImagePath();
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
            //change the weather
            randomWeatherText();
            randomWeatherImagePath();
            clicks --;
            //move backward
        }
    });

    //go back in time
    $('.controls a.go').click(function(e){
        e.preventDefault();
        var val = $('.backTime').val();
        vm.dateToday = new Date(val);
    });

    //new year wishes
    $('.controls a.confirm').click(function(e){
        e.preventDefault();
        var val = $('.wishInput').val();
        vm.banner = val;
    });

    //random weather with jQuery
    function randomWeatherText(){
        var newWeatherText = vm.weatherText[Math.floor(Math.random()*3)];
        $('.weather span').text(newWeatherText);
    }
    function randomWeatherImagePath(){
        var path = "";
        var text = $('.weather span').text();
        if(text.includes('晴')){
            path = vm.weatherImagePath[0];
        } else if(text.includes('雨')) {
            path = vm.weatherImagePath[1];
        } else if(text.includes('雲')){
            path = vm.weatherImagePath[2];
        }
        $('.weather img').attr('src', path);
    }
});