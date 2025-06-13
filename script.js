var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#getScore").textContent = score;
}

function makebubble(){
    let clutter = " ";
for( var i=1;i<=160;i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div id="bubble">${rn}</div>`;
}
document.querySelector("#pbottom").innerHTML=clutter;
}

function runtimer(){
    var clock = setInterval(function(){
        if(timer>0){
            timer--;
        document.querySelector("#timer").textContent = timer;
        }
        else{
            clearInterval(clock);
            document.querySelector("#pbottom").innerHTML=`<h1>GAME OVER </h1>`;
        }
    },1000);
}

function newHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

document.querySelector("#pbottom").addEventListener("click",function(dets){
    var clickedNum = Number(dets.target.textContent);
    if(hitrn===clickedNum){
       increaseScore();
       makebubble();
       newHit();
    }
})

makebubble();
runtimer();
newHit();
