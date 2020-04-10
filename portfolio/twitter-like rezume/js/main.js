window.addEventListener('load',function(){
    //cover photo minesweeper
    Vue.component('minesweeper', {
        template: '<css-doodle class="minesweeper" use="var(--rule)" @click="refresh"></css-doodle>',
        methods: {
            refresh: function() {
                const doodle = document.querySelector('css-doodle');
                doodle.update();
            }
        }
    });
    Vue.component('follow', {
        template: '<div class="follow" @click="$emit(\'add-bookmark\'); addBookmark();">&nbsp;&nbsp;跟隨</div>',
        methods: {
            addBookmark: function(title, url) {
                if (window.sidebar && window.sidebar.addPanel) {
                    window.sidebar.addPanel(title, url, "");
                } else if (window.external.AddFavorite) {
                    window.external.AddFavorite(url, title);
                } else {
                    alert('您的瀏覽器不支援加入我的最愛功能!');
                }
            }
        }
    });
    //Vue.js
    var vm = new Vue({
        el: '#app',
        data: {
            darkMode: 'on',
            following: 2,
            follower: 0,
            nowTab: 'work',
            workData: [
                {title: '口罩實名制 2/6 上路！', desc: '使用 CSS 畫圖，在有限的屬性下表現出豐富的效果。', hashtags: ['HTML', 'CSS'], url: 'http://ivan19940106.github.io/Kyoto-little-trip/portfolio/face%20mask/index.html', imgPath: './image/work cover/face mask.png'},
                {title: '為自己調一杯珍奶，Vue.js櫻花珍珠手搖杯', desc: 'Vue.js 的 v-for、v-bind、v-if 綜合練習，快來調出屬於你的珍奶吧！要記得選用環保杯喲，地球已經太擁擠了容不下一點塑膠！', hashtags: ['Vue.js', 'CSS3'], url: 'http://ivan19940106.github.io/Kyoto-little-trip/portfolio/bubble%20tea/bubble%20tea.html', imgPath: './image/work cover/bubble tea.gif'},
                {title: '天然とんこつラーメン専門店 「一蘭」', desc: '體驗 Vue.js Event Bus 在元件之間傳遞資料的妙用，無限加麵好不快樂！', hashtags: ['Vue.js', 'Vue component', 'CSS3'], url: 'http://ivan19940106.github.io/Kyoto-little-trip/portfolio/ichiran/index.html', imgPath: './image/work cover/ichiran.gif'},
                {title: '資策會團體專題：台北散步。', desc: '在這個Google搜尋結果如汪洋般無邊無際的世界裡，台北散步將國外free walking tour的體驗由線下搬至線上。不需要真人導遊或事先規劃，打開網頁即可跟著路線散步。兩小時實地走訪台北核心，迅速掌握台北城市的方向感、了解歷史脈絡。', hashtags: ['project', 'RWD', 'jQuery', 'AJAX', 'Google Map API', 'Canvas API', 'PHP', 'MySQL'], url: 'http://140.115.236.71/demo-projects/DD105/DD105G2/', imgPath: './image/work cover/taipei sanpo.gif'},
                {title: 'My very first web work!', desc: '我利用下班時間自學刻出的第一個網站！', hashtags: ['HTML', 'CSS', 'RWD', 'jQuery'], url: 'http://ivan19940106.github.io/Kyoto-little-trip/index.html', imgPath: './image/work cover/personal website.png'},
                {title: '最新文章卡片集錦', desc: '將我部落個的文章疊成美麗的卡片！', hashtags: ['CSS','JavaScript', 'jQuery'], url: 'http://ivan19940106.github.io/Kyoto-little-trip/portfolio/latest%20article/latest%20article.html', imgPath: './image/work cover/article stack.gif'},
                {title: '美麗的太陽系九大行星！', desc: '雖然應該已經改叫八大行星很久了，這是用 CSS3 keyframe 動畫做出來的太陽系，還有旅行者號飛船唷！', hashtags: ['CSS3'], url: 'http://ivan19940106.github.io/Kyoto-little-trip/portfolio/solar%20system/solar%20system.html', imgPath: './image/work cover/solar system.gif'},
                {title: '75% 消毒酒精計算機', desc: '還可以換成生命之水、85度高粱酒調製喲！還好不是用莫耳濃度計算！', hashtags: ['CSS3', 'Vue.js', 'smoke.js'], url: 'http://ivan19940106.github.io/Kyoto-little-trip/portfolio/alcohol/index.html', imgPath: './image/work cover/alcohol.gif'},
                {title: 'Vue.js 傳統日曆，懷念的每一天', desc: '會不會有一天，時間真的能倒退，退回你的我的回不去的悠悠的歲月。', hashtags: ['CSS','JavaScript', 'Vue.js'], url: 'http://ivan19940106.github.io/Kyoto-little-trip/portfolio/calendar/index.html', imgPath: './image/work cover/calendar.gif'},
                {title: '台鐵火車票！', desc: '十五節的車廂滿載的行李，南北搬運著思念。五小時的等待，終點就在前面。', hashtags: ['CSS', 'Vue.js'], url: 'http://ivan19940106.github.io/Kyoto-little-trip/portfolio/one%20way%20ticket/one%20way%20ticket.html', imgPath: './image/work cover/ticket.png'},
                {title: '2小時讀懂明治維新', desc: '不請自來的美國海軍培里，率領著軍隊打開了日本的大門。雖然說是簽訂了喪權辱國的條約，但卻也是使日本走上現代化的契機。至今在東京台場還有紀念培里的銅像。其實培里的角色和鴉片戰爭的亨利一樣，但是在中國卻沒有人紀念他，還把林則徐說得很秋。兩國對於外國的態度，決定了未來的道路，至今也是如此。', hashtags: ['CSS', 'TweenMax.js'], url: 'http://ivan19940106.github.io/Kyoto-little-trip/portfolio/meijiishin/index.html', imgPath: './image/work cover/meijiishin.gif'},
                {title: '台灣行政區域圖！', desc: '你是否記得，每一個縣市的名字和位置在哪兒呢？', hashtags: ['CSS', 'SVG', 'Vue.js'], url: 'http://ivan19940106.github.io/Kyoto-little-trip/portfolio/territory/index.html', imgPath: './image/work cover/taiwan.gif'},
                {title: '魏如萱 waa wei 第六張個人最新專輯', desc: '【藏著並不等於遺忘 Hidden, Not Forgotten】一首歌包含了四種語言（閩南語、廣東話、英語、華語），但要說的都是同一句話，就是「我想你」。', hashtags: ['CSS', 'TweenMax.js'], url: 'http://ivan19940106.github.io/Kyoto-little-trip/portfolio/record/index.html', imgPath: './image/work cover/record.gif'},
                {title: 'Atelier Koco. Official Website', desc: '製琴工作室 Atelier Koco. 官方網站，首頁產品區為我製作的第一把手工吉他唷！', hashtags: ['project', 'RWD', 'tone.js', 'Chart.js'], url: 'http://ivan19940106.github.io/Kyoto-little-trip/portfolio/atelier%20koco./index.html', imgPath: './image/work cover/atelier koco..png'},
                {title: '大抓周踩地雷！', desc: '快來試試未來的你在哪裡呢？', hashtags: ['CSS-doodle', 'JavaScript'], url: 'http://ivan19940106.github.io/Kyoto-little-trip/portfolio/draw%20lots/index.html', imgPath: './image/work cover/draw lots.gif'}
            ]
        },
        methods: {
            changeDarkMode(){
                var self = this;
                $('#dark-mode').toggleClass('off');
                if($('#dark-mode').hasClass('off')){
                    $('body').addClass('normal-background');
                    $('.description').find('span').addClass('normal-font-color');
                    self.darkMode = 'off';
                } else {
                    $('body').removeClass('normal-background');
                    $('.description').find('span').removeClass('normal-font-color');
                    self.darkMode = 'on';
                }
            }
        }
    });
    window.vm = vm;
    //t.js typing effect
    $('.description').t();
    //previous-page-arrow
    $('.previous-page-arrow').click(function(){
        alert('不許你離開！！');
    });
    //modal
    function openModal(modalContent){
        $('.modal').removeClass('hide-modal');
        $('body').addClass('scroll-lock');
        $('.modal-content').append(modalContent);
    }
    $('.icon-cancel').click(function(){
        $('.modal').addClass('hide-modal');
        $('body').removeClass('scroll-lock');
        $('.modal-content').html('');
    });
    //show profile photo
    $('.profile-photo').click(function(){
        var profilePhoto = '<img src="./image/profile-photo.jpg" alt="profile-photo">';
        openModal(profilePhoto);
    });
    //following
    $('.following').click(function(e){
        e.preventDefault();
        var followings = '<iframe src="https://www.youtube.com/embed/tU3Ly2sEKCg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br><br><iframe src="https://www.youtube.com/embed/zFnNU7VPNbg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        openModal(followings);
    });
    //follower
    $('.follower').click(function(e){
        e.preventDefault();
        alert('快點兒去按「跟隨」！！');
    });
    //hashtag
    $('.hashtag').click(function(e){
        e.preventDefault();
        renewHashtags();
        var nowHashtag = $(this).text();
        for(var i=0;i<=$('.work-wrapper').length-1;i++){
            var everyHashtag = $('.work-wrapper').eq(i).find('a.hashtag').text();
            if(everyHashtag.search(nowHashtag) == -1){
                document.getElementsByClassName('work-wrapper')[i].classList.add('hide-work');
            }
        }
    });
    //show all hashtags
    $('.work').click(function(){
        renewHashtags();
    });
    //renew function
    function renewHashtags(){
        for(var i=0;i<=$('.work-wrapper').length-1;i++){
            document.getElementsByClassName('work-wrapper')[i].classList.remove('hide-work');
        }
    }
});