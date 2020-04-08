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
        template: '<div class="follow" @click="addBookmark(); $emit(\'add-bookmark\')">&nbsp;&nbsp;跟隨</div>',
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
            follower: 0
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
    // $('.description').t();
});