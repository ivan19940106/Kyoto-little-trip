$(document).ready(function(){
    var vm = new Vue({
        el: "#app",
        data: {
            editing: true,
            cupTypes: ["small", "medium", "big", "mug"],
            coffees: [
                {name: "Expresso", coffee: 80, bubble: 0, water: 0, milk: 0, type: "small"},
                {name: "Americano", coffee: 40, bubble: 0, water: 40, milk: 0},
                {name: "Cappuccino", coffee: 40, bubble: 0, water: 0, milk: 50, type: "big"},
                {name: "latte", coffee: 30, bubble: 30, water: 0, milk: 30}
            ],
            ingradients: ["coffee", "milk", "bubble", "water"],
            favoriteType: "Cappuccino"
        }
    });
    window.vm = vm;
});