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
                {title: '口罩實名制 2/6 上路！', desc: '使用 CSS 畫圖，在有限的屬性下表現出豐富的效果。', url: 'http://ivan19940106.github.io/Kyoto-little-trip/portfolio/face%20mask/index.html', imgPath: './image/work cover/face mask.png'},
                {title: '為自己調一杯珍奶，Vue.js櫻花珍珠手搖杯', desc: 'Vue.js 的 v-for、v-bind、v-if 綜合練習，快來調出屬於你的珍奶吧！要記得選用環保杯喲，地球已經太擁擠了容不下一點塑膠！', url: 'http://ivan19940106.github.io/Kyoto-little-trip/portfolio/bubble%20tea/bubble%20tea.html', imgPath: './image/work cover/bubble tea.gif'},
                {title: '天然とんこつラーメン専門店 「一蘭」', desc: '體驗 Vue.js Event Bus 在元件之間傳遞資料的妙用，無限加麵好不快樂！', url: 'http://ivan19940106.github.io/Kyoto-little-trip/portfolio/ichiran/index.html', imgPath: './image/work cover/ichiran.gif'},
                {title: 'My very first web work!', desc: '我利用下班時間自學刻出的第一個網站！', url: 'http://ivan19940106.github.io/Kyoto-little-trip/index.html', imgPath: './image/work cover/personal website.png'},
                {title: '最新文章卡片集錦', desc: '將我部落個的文章疊成美麗的卡片！', url: 'http://ivan19940106.github.io/Kyoto-little-trip/portfolio/latest%20article/latest%20article.html', imgPath: './image/work cover/article stack.gif'},
                {title: '美麗的太陽系九大行星！', desc: '雖然應該已經改叫八大行星很久了，這是用 CSS3 keyframe 動畫做出來的太陽系，還有旅行者號飛船唷！', url: 'http://ivan19940106.github.io/Kyoto-little-trip/portfolio/solar%20system/solar%20system.html', imgPath: './image/work cover/solar system.gif'},
                {title: '75% 消毒酒精計算機', desc: '還可以換成生命之水、85度高粱酒調製喲！還好不是用莫耳濃度計算！', url: 'http://ivan19940106.github.io/Kyoto-little-trip/portfolio/alcohol/index.html', imgPath: './image/work cover/alcohol.gif'},
                {title: 'Vue.js 傳統日曆，懷念的每一天', desc: '會不會有一天，時間真的能倒退，退回你的我的回不去的悠悠的歲月。', url: 'http://ivan19940106.github.io/Kyoto-little-trip/portfolio/calendar/index.html', imgPath: './image/work cover/calendar.gif'},
                {title: '台鐵火車票！', desc: '十五節的車廂滿載的行李，南北搬運著思念。五小時的等待，終點就在前面。', url: 'http://ivan19940106.github.io/Kyoto-little-trip/portfolio/one%20way%20ticket/one%20way%20ticket.html', imgPath: './image/work cover/ticket.png'}
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
});