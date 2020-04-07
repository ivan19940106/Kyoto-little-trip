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
    //Vue.js
    var vm = new Vue({
        el: '#app',
        data: {
            darkMode: 'on'
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