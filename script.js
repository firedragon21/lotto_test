var Awards = ['銘謝惠顧','頭獎','貳獎','中十塊','中五塊'],
timer = null, 
flag = 0; 
window.onload = function() {
var play = document.getElementById('play'),
stop = document.getElementById('stop');

play.onclick = Start;
stop.onclick = Stop;

document.onkeyup = function(event) {
event = event || window.event;
if (event.keyCode == 13) {
if (flag == 0) {
Play();
flag = 1;
} else {
Stop();
flag = 0;
}
}
}
}

function Start() {
var title = document.getElementById('title');
var play = document.getElementById('play');

clearInterval(timer);
timer = setInterval(function() {
var random = Math.floor(Math.random() * Awards.length);
title.innerHTML = Awards[random];
}, 50);
let randomNumber=Math.round(Math.random()*1000);

play.style.background = '#999';
}

function Stop(randomNumber) {
clearInterval(timer);
var play = document.getElementById('play');
play.style.background = '#036';
alert(choose(randomNumber));
title.innerHTML = choose(randomNumber);
}
function choose(randomNumber){
    if(randomNumber<=500){
        return ("銘謝惠顧");
    }else if
    (randomNumber>500&&randomNumber<=550){
        return("頭獎");
    }
    else if(randomNumber>550&&randomNumber<=650){
        return("貳獎");
    }
    else if(randomNumber>650&&randomNumber<=850){
        return("中十塊");
    }
    else{
        return("中五塊");
    }
}