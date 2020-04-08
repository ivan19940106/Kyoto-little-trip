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
                    alert("您的瀏覽器不支援加入我的最愛功能!");
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
                {title: '天然とんこつラーメン専門店 「一蘭」', desc: '體驗 Vue.js Event Bus 在元件之間傳遞資料的妙用，無限加麵好不快樂！', url: 'http://ivan19940106.github.io/Kyoto-little-trip/portfolio/ichiran/index.html', imgPath: './image/work cover/ichiran.gif'}
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
});