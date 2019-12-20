$(document).ready(function(e){
    var vm = new Vue({
        el: '#app',
        data: {
            editing: true,
            features: ['店長推薦', '國外進口', '本土好茶', '冬季限定'],
            milkTeas: [
                {name: "四季奶青加珍珠", foam: 10, milk: 30, 'green-tea': 20, 'black-tea': 0, bubbles: 5, type: 'thermos', accType: 'top'},
                {name: "京都風雲珍珠奶綠", foam: 5, milk: 10, 'green-tea': 20, 'black-tea': 0, bubbles: 10, type: 'paper-cup', accType: 'straw'},
                {name: "日月潭奶蓋紅茶", foam: 5, milk: 15, 'green-tea': 0, 'black-tea': 0, bubbles: 1, type: 'coffee-cup'},
                {name: "暖心紅茶拿鐵", foam: 5, milk: 25, 'green-tea': 0, 'black-tea': 10, bubbles: 5, type: 'mug'}
            ],
            cupTypes: ['thermos', 'paper-cup', 'coffee-cup', 'mug'],
            cupTypesChinese: ['自備環保保溫杯', '風味手搖杯', '古典白瓷咖啡杯', '經典馬克杯'],
            accTypes: ['top', 'straw'],
            favoriteMilkTea: '四季奶青加珍珠'
        }
    });
    window.vm = vm;
});