$(document).ready(function(){
    var vm = new Vue({
        el: '#app',
        data: {
            noodles: 2,
            negis: 100,
            meats: 2
        },
        computed: {}
    });
    window.vm = vm;

    $('.bowl').click(function(){
        $('.ingradients').toggleClass('eaten-up');
    });
});