$(document).ready(function(){
    var vm = new Vue({
        el: '#app',
        data: {
            alcVol: 200,
            watVol: 60
        },
        computed: {
            calcAlcCon: function(){
                var alcCon = (this.alcVol*0.95/(this.alcVol+this.watVol)*100).toFixed(1);
                return alcCon;
            }
        }
    });
    window.vm = vm;

    //smoke.js
    if(window.innerWidth>=768){
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        canvas.width = 600;
        canvas.height = 500;
    
        var r = Math.random()*255;
        var g = Math.random()*255;
        var b = Math.random()*255;

        var party = SmokeMachine(ctx, [r, g, b]);
        party.start(); // start animating
        party.addSmoke(250,330,10); // wow we made smoke

        setTimeout(function(){
            party.stop(); // stop animating
            party.addSmoke(290,450,50);
            party.addSmoke(250,330,20);
            for(var i=0;i<10;i++){
                party.step(10); // pretend 10 ms pass and rerender
            }
    
            setTimeout(function(){
                party.start();
            },1000);
    
        },2000);
    
        $('.top').on('mouseover click', function(){
            party.stop(); // stop animating
            party.addSmoke(290,450,50);
            party.addSmoke(250,330,20);
            for(var i=0;i<10;i++){
                party.step(10); // pretend 10 ms pass and rerender
            }
    
            setTimeout(function(){
                party.start();
            },1000);
        });
    } else {
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = 500;

        var r = Math.random()*255;
        var g = Math.random()*255;
        var b = Math.random()*255;
    
        var party = SmokeMachine(ctx, [r, g, b]);
        party.start(); // start animating
        party.addSmoke(170,330,10); // wow we made smoke

        setTimeout(function(){
            party.stop(); // stop animating
            party.addSmoke(160,350,30);
            party.addSmoke(150,230,20);
            for(var i=0;i<10;i++){
                party.step(10); // pretend 10 ms pass and rerender
            }
    
            setTimeout(function(){
                party.start();
            },1000);
    
        },2000);
    
        $('.top').on('click', function(){
            party.stop(); // stop animating
            party.addSmoke(160,350,30);
            party.addSmoke(150,230,20);
            for(var i=0;i<10;i++){
                party.step(10); // pretend 10 ms pass and rerender
            }
    
            setTimeout(function(){
                party.start();
            },1000);
        });
    }
});