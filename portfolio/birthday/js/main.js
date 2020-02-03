$(document).ready(function(){
    var placeData=[
        {
         tag: "taipei-city",
         place: "臺北市",
         low: 16,
         high: 24,
         weather: "Rainy"
        },
      
        {
         tag: "new-taipei-city",
         place: "新北市",
         low: 15,
         high: 22,
         weather: "Rainy"
        },
      
        {
         tag: "taichung-city",
         place: "台中市",
         low: 15,
         high: 22,
         weather: "Rainy"
        },
      
        {
         tag: "tainan-city",
         place: "臺南市",
         low: 16,
         high: 24,
         weather: "Rainy"
        },
      
        {
         tag: "kaohsiung-city",
         place: "高雄市",
         low: 16,
         high: 24,
         weather: "Rainy"
        },
      
        {
         tag: "keelung-city",
         place: "基隆市",
         low: 15,
         high: 24,
         weather: "Rainy"
        },
      
        {
         tag: "taoyuan-county",
         place: "桃園市",
         low: 15,
         high: 24,
         weather: "Rainy"
        },
      
        {
         tag: "hsinchu-city",
         place: "新竹市",
         low: 13,
         high: 21,
         weather: "Rainy"
        },
      
        {
         tag: "hsinchu-county",
         place: "新竹縣",
         low: 19,
         high: 21,
         weather: "Rainy"
        },
      
        {
         tag: "miaoli-county",
         place: "苗栗縣",
         low: 16,
         high: 24,
         weather: "Rainy"
        },
      
        {
         tag: "changhua-county",
         place: "彰化縣",
         low: 14,
         high: 24,
         weather: "Rainy"
        },
      
        {
         tag: "nantou-county",
         place: "南投縣",
         low: 12,
         high: 24,
         weather: "Rainy"
        },
      
        {
         tag: "yunlin-county",
         place: "雲林縣",
         low: 11,
         high: 24,
         weather: "Cloudy"
        },
      
        {
         tag: "chiayi-city",
         place: "嘉義市",
         low: 10,
         high: 24,
         weather: "Rainy"
        },
      
        {
         tag: "chiayi-county",
         place: "嘉義縣",
         low: 12,
         high: 24,
         weather: "Cloudy"
        },
      
        {
         tag: "pingtung-county",
         place: "屏東縣",
         low: 18,
         high: 24,
         weather: "Cloudy"
        },
      
        {
         tag: "yilan-county",
         place: "宜蘭縣",
         low: 20,
         high: 24,
         weather: "Cloudy"
        },
      
        {
         tag: "hualien-county",
         place: "花蓮縣",
         low: 21,
         high: 24,
         weather: "Sunny"
        },
      
        {
         tag: "taitung-county",
         place: "台東縣",
         low: 17,
         high: 22,
         weather: "Sunny"
        },
      
        {
         tag: "penghu-county",
         place: "澎湖縣",
         low: 14,
         high: 24,
         weather: "Cloudy"
        },
      
        {
         tag: "kinmen-county",
         place: "金門縣",
         low: 15,
         high: 26,
         weather: "Sunny"
        },
      
        {
         tag: "lienchiang-county",
         place: "連江縣",
         low: 15,
         high: 20,
         weather: "Rainy"
        },
    ];

    var vm = new Vue({
        el: '#app',
        data: {
            //calendar data
            dateToday: new Date(),
            banner: '財源廣進',
            pages: 10,
            year: [2019,2020],
            yearIndexX: ['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'],
            yearIndexY: ['子','醜','寅','卯','辰','巳','午','未','申','酉','戌','亥'],
            solarTerms: ['立春','雨水','驚蟄','春分','清明','穀雨','立夏','小滿','芒種','夏至','小暑','大暑','立秋','處暑','白露','秋分','寒露','霜降','立冬','小雪','大雪','冬至','小寒','大寒'],
            dateTraditional: ['初一','初二','初三','初四','初五','初六','初七','初八','初九','初十','十一','十二','十三','十四','十五','十六','十七','十八','十九','二十','廿一','廿二','廿三','廿四','廿五','廿六','廿七','廿八','廿九','三十','三一'],
            weatherText: ['晴','雨','雲'],
            weatherImagePath: ["./images/weather/sun.png", "./images/weather/umbrella.png", "./images/weather/cloud.png"],
            date: [1],
            month: [1],
            monthEnglish: ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'],
            goodLuck: ['出遊','會親友','訂盟','造屋','理髮','入宅','安床'],
            badLuck: ['諸事不宜'],
            weekday: ['一','二','三','四','五','六','日'],
            quote: ["以銅為鏡，可以正衣冠。以古為鏡，可以知興替。以人為鏡，可以明得失。"],

            //ticket data
            company: "台灣鐵路局",
            ticket: {
                date: "2020.01.10-01.11",
                from: "臺北",
                to: "高雄",
                direction: "south",
                other: "<b>限當日當次車有效</b>",
                price: 700,
                discount: 0.5,
                link: "https://www.railway.gov.tw/tra-tip-web/tip"
            },

            //taiwan data
            placeData: placeData,
            idResult: '',
            filterResult: ''
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
                if(this.dateToday.getDay()==0){
                    return this.weekday[6];
                } else {
                    var weekday = this.dateToday.getDay();
                    return this.weekday[weekday-1];
                }
            },
            goodLuckBasedOnWeekday: function(){
                if(this.dateToday.getDay()==0){
                    return this.goodLuck[6];
                } else {
                    var goodLuck = this.dateToday.getDay();
                    return this.goodLuck[goodLuck-1];
                }
            },
            beenTogether: function(){
                var anniv = new Date('2019-07-26');
                var daysTogether = parseInt(Math.abs(this.dateToday-anniv)/1000/60/60/24);
                return daysTogether;
            },

            //taiwan
            getPlaceName: function(){
                var vobj = this;
                var placeName = '';
                for(var i=0;i<vobj.placeData.length;i++){
                    if(vobj.placeData[i].tag == vm.idResult.replace(' ','-')){
                        placeName = vobj.placeData[i].place;
                    }
                }
                this.filterResult = placeName.replace('市','').replace('縣','');
                return placeName;
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
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var pageWidth = parseInt($('.calendar').eq(0).css('width'));
        var pageHeight = parseInt($('.calendar').eq(0).css('height'));
        if(windowWidth<=768){
            for(var i=0;i<pages;i++){
                var top = windowHeight/3.2-i*2;
                var width = pageWidth-i*2;
                var z = -1*i;
                $('.calendar').eq(i).css({
                    top: top+'px',
                    width: width+'px',
                    'z-index': pages+z
                });
                //banner
                $('.banner').css({
                    top: windowHeight/3.2-pageHeight/2-pages*2+'px',
                    transform: 'translate(-50%,-98%)',
                    width: width+'px'
                });
            }
            //controls
            $('.controls').css({
                top: windowHeight/3.6+pageHeight/2+110+'px'
            });
        } else {
            for(var i=0;i<pages;i++){
                var top = windowHeight/2.3-i*2;
                var width = pageWidth-i*2;
                var z = -1*i;
                $('.calendar').eq(i).css({
                    top: top+'px',
                    width: width+'px',
                    'z-index': pages+z
                });
                //banner
                $('.banner').css({
                    top: windowHeight/2.3-pageHeight/2-pages*2+'px',
                    transform: 'translate(-50%,-98%)',
                    width: width+'px'
                });
            }
            //controls
            $('.controls').css({
                top: windowHeight/2.4+pageHeight/2+110+'px'
            });
        }
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

    //birthday wishes
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

    //taiwan
    $('path').mouseenter(function(e){
        var idName = $(this).attr('id').replace('-',' ');
        vm.idResult = idName;
    });

    //modal
    $('.tainan').click(function(){
        var y = window.pageYOffset;
        $('.modal').css({
            top: y + 'px'
        });
        $('.modal').addClass('show-modal');
        $('body').addClass('scroll-lock');
    });

    $('.close').click(function(e){
        e.preventDefault();
        $('.modal').removeClass('show-modal');
        $('body').removeClass('scroll-lock');
    });

    //slick
    $('.slider').slick({
        autoplay: true,
        infinite: true,
        arrows: true,
        dots: true
    });
});