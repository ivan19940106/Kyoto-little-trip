window.addEventListener('load',function(){
    var vm = new Vue({
        el: '.wrapper',
        methods: {
            generate: function () {
            const doodle = document.querySelector('css-doodle');
            doodle.update();
            }
        }
    })
});