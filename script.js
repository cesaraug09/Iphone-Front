let hours = document.querySelector('.hours');
let search = document.querySelector('.inputsearch');
let anotherbutton = document.querySelector('.buttonairplane');
let circle = document.querySelector('.circle2');
let button = document.querySelector('.buttondark');
let background = document.querySelector('.container1');
let subtitle = document.querySelector('.subtitle');
let whiteblocks1 = document.querySelector('.whiteblocks');
let whiteblocks2 = document.getElementById('two');
let whiteblocks3 = document.getElementById('three');
let bar = document.getElementById('bar0');
let bar1 = document.getElementById('bar1');
let bar2= document.getElementById('bar2');
let bar3 = document.getElementById('bar3');
let cont = 0;

const loop = setInterval(()=>{
    let now = new Date();
    var hor = now.getHours();
    let min = now.getMinutes().toString().padStart(2, '0');
    hours.innerHTML=`${hor}:${min}`;
}, 100);

function darkmode(){
    if(cont ==  0){
    circle.style.right = "-16px";
    button.style.background = "#34CC56";
    anotherbutton.style.background = "#39393D";
    background.style.background = "#0f0f0f";
    whiteblocks1.style.background = "#1C1C1E";
    whiteblocks2.style.background = "#1C1C1E";
    whiteblocks3.style.background = "#1C1C1E";
    bar.style.background = "#303032";
    bar1.style.background = "#303032";
    bar2.style.background = "#303032";
    bar3.style.background = "#303032";
    search.style.background = "#1C1C1E";
    document.body.style.color="#F9F9FF";
    subtitle.style.color="#8D8D93";
    background.style.animation="transitiondark 0.2s ease-in"
    whiteblocks1.style.animation="transitiondark 0.2s linear"
    whiteblocks2.style.animation="transitiondark 0.2s linear"
    whiteblocks3.style.animation="transitiondark 0.2s linear"
    button.style.animation="buttonAct 0.3s linear"
    circle.style.animation="circleAct 0.2s ease-in-out"
    cont++
    } else{
        circle.style.right = "3px";
        button.style.background = "#E5E6E5";
        anotherbutton.style.background = "#E5E6E5";
        background.style.background = "#F2F2F7";
        whiteblocks1.style.background = "#ffffff";
        whiteblocks2.style.background = "#ffffff";
        whiteblocks3.style.background = "#ffffff";
        bar.style.background = "#E5E6E5";
        bar1.style.background = "#E5E6E5";
        bar2.style.background = "#E5E6E5";
        bar3.style.background = "#E5E6E5";
        document.body.style.color="#0f0f0f";
        search.style.background = "#E3E3E8";
        subtitle.style.color="#0f0f0f";
        background.style.animation="transitionlight 0.2s linear"
        button.style.animation="buttonDes 0.3s linear"
        circle.style.animation="circleDes 0.2s ease-in-out"
        cont--;
    }
}