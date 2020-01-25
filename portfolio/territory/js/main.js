$(document).ready(function(){
    var placeData=[
        {
         tag: "taipei-city",
         place: "臺北市",
         low: 16,
         high: 24,
         weather: "Rainy"
        },
      
        {
         tag: "new-taipei-city",
         place: "新北市",
         low: 15,
         high: 22,
         weather: "Rainy"
        },
      
        {
         tag: "taichung-city",
         place: "台中市",
         low: 15,
         high: 22,
         weather: "Rainy"
        },
      
        {
         tag: "tainan-city",
         place: "臺南市",
         low: 16,
         high: 24,
         weather: "Rainy"
        },
      
        {
         tag: "kaohsiung-city",
         place: "高雄市",
         low: 16,
         high: 24,
         weather: "Rainy"
        },
      
        {
         tag: "keelung-city",
         place: "基隆市",
         low: 15,
         high: 24,
         weather: "Rainy"
        },
      
        {
         tag: "taoyuan-county",
         place: "桃園市",
         low: 15,
         high: 24,
         weather: "Rainy"
        },
      
        {
         tag: "hsinchu-city",
         place: "新竹市",
         low: 13,
         high: 21,
         weather: "Rainy"
        },
      
        {
         tag: "hsinchu-county",
         place: "新竹縣",
         low: 19,
         high: 21,
         weather: "Rainy"
        },
      
        {
         tag: "miaoli-county",
         place: "苗栗縣",
         low: 16,
         high: 24,
         weather: "Rainy"
        },
      
        {
         tag: "changhua-county",
         place: "彰化縣",
         low: 14,
         high: 24,
         weather: "Rainy"
        },
      
        {
         tag: "nantou-county",
         place: "南投縣",
         low: 12,
         high: 24,
         weather: "Rainy"
        },
      
        {
         tag: "yunlin-county",
         place: "雲林縣",
         low: 11,
         high: 24,
         weather: "Cloudy"
        },
      
        {
         tag: "chiayi-city",
         place: "嘉義市",
         low: 10,
         high: 24,
         weather: "Rainy"
        },
      
        {
         tag: "chiayi-county",
         place: "嘉義縣",
         low: 12,
         high: 24,
         weather: "Cloudy"
        },
      
        {
         tag: "pingtung-county",
         place: "屏東縣",
         low: 18,
         high: 24,
         weather: "Cloudy"
        },
      
        {
         tag: "yilan-county",
         place: "宜蘭縣",
         low: 20,
         high: 24,
         weather: "Cloudy"
        },
      
        {
         tag: "hualien-county",
         place: "花蓮縣",
         low: 21,
         high: 24,
         weather: "Sunny"
        },
      
        {
         tag: "taitung-county",
         place: "台東縣",
         low: 17,
         high: 22,
         weather: "Sunny"
        },
      
        {
         tag: "penghu-county",
         place: "澎湖縣",
         low: 14,
         high: 24,
         weather: "Cloudy"
        },
      
        {
         tag: "kinmen-county",
         place: "金門縣",
         low: 15,
         high: 26,
         weather: "Sunny"
        },
      
        {
         tag: "lienchiang-county",
         place: "連江縣",
         low: 15,
         high: 20,
         weather: "Rainy"
        },
    ];

    var vm = new Vue({
        el: '#app',
        data: {
            placeData: placeData,
            idResult: '',
            filterResult: ''
        },
        computed: {
            getPlaceName: function(){
                var vobj = this;
                var placeName = '';
                for(var i=0;i<vobj.placeData.length;i++){
                    if(vobj.placeData[i].tag == vm.idResult.replace(' ','-')){
                        placeName = vobj.placeData[i].place;
                    }
                }
                return placeName;
            }
        }
    });

    window.vm = vm;

    $('path').mouseenter(function(e){
        var idName = $(this).attr('id').replace('-',' ');
        vm.idResult = idName;
        //placeName
        // var placeName = '';
        // for(var i=0;i<vm.placeData.length;i++){
        //     if(vm.placeData[i].tag == vm.idResult.replace(' ','-')){
        //         placeName = vm.placeData[i].place;
        //         vm.filterResult = placeName;
        //     }
        // }
    });
});