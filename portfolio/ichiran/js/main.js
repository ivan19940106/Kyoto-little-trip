$(document).ready(function(){
    var vm = new Vue({
        el: '#app',
        data: {
            negis: 100,
            meats: 2,
            kara: 70,
            ordered: false
        },
        computed: {}
    });
    window.vm = vm;

    $('#ordered').on('change', function(){
        if($('#ordered').val()){
            vm.ordered = true;
        }
    });

    $('.negi-row label').click(function(){
        $('label').removeClass('circled');
        $(this).addClass('circled');
        vm.negis = parseInt($(`#${$(this).attr('for')}`).val());
    });
    $('.meat-row label').click(function(){
        $('label').removeClass('circled');
        $(this).addClass('circled');
        vm.meats = parseInt($(`#${$(this).attr('for')}`).val());
    });
    $('.kara-row label').click(function(){
        $('label').removeClass('circled');
        $(this).addClass('circled');
        vm.kara = parseInt($(`#${$(this).attr('for')}`).val());
    });

    $('.kaedama').click(function(){
        if($('.ingradients').hasClass('eaten-up')){
            vm.negis = 0;
            vm.meats = 0;
            vm.kara = 0;
            $('.ingradients').removeClass('eaten-up');
        }
    });

    $('.bowl').click(function(){
        $('.ingradients').addClass('eaten-up');
    });
});