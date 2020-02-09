window.addEventListener('load', function(){
    var myCanvas = document.getElementById('my-canvas');
    var ctx = myCanvas.getContext('2d');

    myCanvas.width = 400;
    myCanvas.height = 400;

    var time = 0;

    function draw(){
        time++;
        ctx.clearRect(0,0,400,400);
        ctx.beginPath();
        for(var i=0;i<=10;i++){
            var pos = 50*i;
            ctx.moveTo(pos,0);
            ctx.lineTo(pos,400);
            ctx.fillText(pos,pos,10);

            ctx.moveTo(0,pos);
            ctx.lineTo(400,pos);
            ctx.fillText(pos,10,pos);
        }
        ctx.strokeStyle = 'rgba(0,0,0,0.1)';
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(25,350);
        ctx.lineTo(375,350);
        ctx.strokeWidth = 2;
        ctx.strokeStyle = 'black';
        ctx.stroke();

        ctx.fillStyle = 'ed5a2a';
        ctx.fillRect(300,300,50,50);
        ctx.strokeRect(300,300,50,50);

        ctx.beginPath();
            ctx.rect(250,250,50,100);
            ctx.rect(50,300,50,50);
        ctx.fillStyle = '#ffc12c';
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
            ctx.rect(100,250,50,100);
            ctx.rect(200,250,50,100);
        ctx.fillStyle = '#ff9f51';
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
            ctx.moveTo(100,200);
            ctx.lineTo(250,200);
            ctx.lineTo(250,250);
            ctx.lineTo(200,250);
            ctx.arc(175,250,25,Math.PI*2,Math.PI,true);
            ctx.lineTo(100,250);
            ctx.closePath();
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
            ctx.moveTo(100,200);
            ctx.lineTo(175,150);
            ctx.lineTo(250,200);
            ctx.closePath();
        ctx.fillStyle = '#ed5a2a';
        ctx.fill();
        ctx.stroke();

        //flag
        ctx.beginPath();
            ctx.moveTo(175,150);
            ctx.lineTo(175,100 - mouse.y/5);
            ctx.lineTo(200,110 - (time%5) - mouse.y/5);
            ctx.lineTo(175,120 - mouse.y/5);
            ctx.closePath();
        ctx.fillStyle = 'hsl('+(mouse.x%360)+',50%,50%)';
        ctx.fill();
        ctx.stroke();

        //car
        var carx = time%440-40;
        ctx.fillStyle = '#64B6AC';
        ctx.fillRect(carx,325,40,25);
        ctx.strokeRect(carx,325,40,25);
        ctx.beginPath();
            ctx.arc(carx+10,350,5,0,Math.PI*2);
            ctx.arc(carx+30,350,5,0,Math.PI*2);
        ctx.fillStyle = 'black';
        ctx.fill();
        ctx.stroke();
    }
    setInterval(draw, 30);
    // draw();

    var mouse = {x:0, y:0};
    myCanvas.addEventListener('mousemove',function(e){
        mouse.x = e.offsetX;
        mouse.y = e.offsetY;
    });
});