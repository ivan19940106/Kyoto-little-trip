$(document).ready(function(e){
    var vm = new Vue({
        el: "#app",
        data: {
            company: "台灣鐵路局",
            ticket: {
                date: "2020.01.10-01.11",
                from: "臺北",
                to: "高雄",
                direction: "south",
                other: "<b>限當日當次車有效</b>",
                price: 700,
                discount: 0.5,
                link: "https://www.railway.gov.tw/tra-tip-web/tip"
            }
        }
    });
    window.vm = vm;
});
