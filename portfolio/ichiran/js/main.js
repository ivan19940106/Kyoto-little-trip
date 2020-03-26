$(document).ready(function(){
    //event bus
    var bus = new Vue();

    Vue.component('kaedama', {
        template: '<div class="kaedama" @click="reset">替玉</div>',
        methods: {
            reset: function(){
                if($('.ingradients').hasClass('eaten-up')){
                    bus.$emit('reset');
                    $('.ingradients').removeClass('eaten-up');
                }
            }
        }
    });
    
    var vm = new Vue({
        el: '#app',
        data: {
            negi: 100,
            meats: 2,
            kara: 70,
            ordered: false
        },
        methods: {
            reset(){
                this.negi = 0;
                this.meats = 0;
                this.kara = 0;
            },
            generate: function (event) {
                const doodle = document.querySelector('css-doodle');
                doodle.update();
            }
        },
        created: function(){
            bus.$on('reset', this.reset);
        },
        beforeDestroy: function(){
            bus.$off('reset', this.reset);
        }
    });
    window.vm = vm;

    $('#ordered').on('change', function(){
        if($('#ordered').val()){
            vm.ordered = true;
        }
    });

    $('.negi-row label').click(function(){
        $('.negi-row label').removeClass('circled');
        $(this).addClass('circled');
        vm.negi = parseInt($(`#${$(this).attr('for')}`).val());
    });
    $('.meat-row label').click(function(){
        $('.meat-row label').removeClass('circled');
        $(this).addClass('circled');
        vm.meats = parseInt($(`#${$(this).attr('for')}`).val());
    });
    $('.kara-row label').click(function(){
        $('.kara-row label').removeClass('circled');
        $(this).addClass('circled');
        vm.kara = parseInt($(`#${$(this).attr('for')}`).val());
    });

    $('.bowl').click(function(){
        if(vm.ordered){
            $('.ingradients').addClass('eaten-up');
            $('css-doodle').addClass('eaten-up');
        }
    });
});