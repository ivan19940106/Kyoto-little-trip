$(document).ready(function(e){
    var vm = new Vue({
        el: '#app',
        data: {
            editing: true,
            features: ['店長推薦', '國外進口', '國產好茶', '冬季限定'],
            milkTeas: [
                {name: "四季奶青加珍珠", foam: 10, milk: 30, 'green-tea': 30, 'black-tea': 0, bubbles: 5, type: 'thermos', accType: 'top'},
                {name: "京都風雲珍珠奶綠", foam: 5, milk: 20, 'green-tea': 30, 'black-tea': 0, bubbles: 10, type: 'paper-cup', accType: 'straw'},
                {name: "日月潭奶蓋紅茶", foam: 10, milk: 15, 'green-tea': 0, 'black-tea': 10, bubbles: 1, type: 'coffee-cup'},
                {name: "暖心紅茶拿鐵", foam: 5, milk: 25, 'green-tea': 0, 'black-tea': 20, bubbles: 5, type: 'mug'}
            ],
            cupTypes: ['thermos', 'paper-cup', 'coffee-cup', 'mug'],
            cupTypesChinese: ['自備環保保溫杯', '風味手搖杯', '古典白瓷咖啡杯', '經典馬克杯'],
            accTypes: ['top', 'straw'],
            computed: {
                //adapt ingradients background color to milkTeas (with Vue.js)
                // for html .ingradients: :style="{'backgroundColor': getIngradientColor}"
                getIngradientColor: function(){
                    var ingradientColor = "";
                    var blackTeaHeight = Number(milkTea['black-tea'].replace('px',''));
                    var greenTeaHeight = Number(milkTea['green-tea'].replace('px',''));
                    var milkHeight = Number(milkTea.milk.replace('px',''));
                    var foamHeight = Number(milkTea.foam.replace('px',''));
                    if(blackTeaHeight != 0){
                        ingradientColor = '#801a08';
                    } else if(greenTeaHeight != 0){
                        ingradientColor = '#9dab86';
                    } else if(milkHeight != 0){
                        ingradientColor = '#f7d8bb';
                    } else if(foamHeight != 0){
                        ingradientColor = '#eee';
                    }
                    return ingradientColor;
                }
            }
        }
    });
    window.vm = vm;

    //adapt ingradients background color to milkTeas (with jQuery)
    console.log(vm.milkTeas.length);
    var ingradientColor = "";
    for(var i=0;i<=vm.milkTeas.length;i++){
        var blackTeaHeight = Number(($(".ingradients").eq(i).find(".black-tea").css("height")).replace('px',''));
        var greenTeaHeight = Number(($(".ingradients").eq(i).find(".green-tea").css("height")).replace('px',''));
        var milkHeight = Number(($(".ingradients").eq(i).find(".milk").css("height")).replace('px',''));
        var foamHeight = Number(($(".ingradients").eq(i).find(".foam").css("height")).replace('px',''));
        if(blackTeaHeight != 0){
            ingradientColor = '#801a08';
        } else if(greenTeaHeight != 0){
            ingradientColor = '#9dab86';
        } else if(milkHeight != 0){
            ingradientColor = '#f7d8bb';
        } else if(foamHeight != 0){
            ingradientColor = '#eee';
        }
        $(".ingradients").eq(i).css('background-color', ingradientColor);
    }
    //do the ingradients adaption once again when a change is detected
    $(document).on('change', 'input', function(){
        console.log('you just adjust the ingradients!');
        for(var i=0;i<=vm.milkTeas.length;i++){
            var blackTeaHeight = Number(($(".ingradients").eq(i).find(".black-tea").css("height")).replace('px',''));
            var greenTeaHeight = Number(($(".ingradients").eq(i).find(".green-tea").css("height")).replace('px',''));
            var milkHeight = Number(($(".ingradients").eq(i).find(".milk").css("height")).replace('px',''));
            var foamHeight = Number(($(".ingradients").eq(i).find(".foam").css("height")).replace('px',''));
            if(blackTeaHeight != 0){
                ingradientColor = '#801a08';
            } else if(greenTeaHeight != 0){
                ingradientColor = '#9dab86';
            } else if(milkHeight != 0){
                ingradientColor = '#f7d8bb';
            } else if(foamHeight != 0){
                ingradientColor = '#eee';
            }
            $(".ingradients").eq(i).css('background-color', ingradientColor);
        }
    });
    // $("input").change(function(){
    //     console.log('you just adjust the ingradients!');
    // });
});