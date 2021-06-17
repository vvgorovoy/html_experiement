window.onload = init;

function init(){
    let arr=[];
    arr[0]=document.getElementById("chapter0");
    arr[1]=document.getElementById("chapter1");
    arr[2]=document.getElementById("chapter2");
    arr[3]=document.getElementById("chapter3");
    let b0 = document.getElementById("b0")
    b0.onclick = click0;
    let b1 = document.getElementById("b1")
    b1.onclick = click1;
    let b2 = document.getElementById("b2")
    b2.onclick = click2;
    let b3 = document.getElementById("b3")
    b3.onclick = click3;
    let ball = document.getElementById("b4")
    ball.onclick = clickall;
    let balln = document.getElementById("b5")
    balln.onclick = clickalln;
}

function click0() {
    document.getElementById("chapter0").style.visibility='visible';
}
function click1() {
    document.getElementById("chapter1").style.visibility='visible';
}
function click2() {
    document.getElementById("chapter2").style.visibility='visible';
}
function click3() {
    document.getElementById("chapter3").style.visibility='visible';
}
function clickall() {
    document.getElementById("chapter0").style.visibility='visible';
    document.getElementById("chapter1").style.visibility='visible';
    document.getElementById("chapter2").style.visibility='visible';
    document.getElementById("chapter3").style.visibility='visible';
}
function clickalln() {
    document.getElementById("chapter0").style.visibility='hidden';
    document.getElementById("chapter1").style.visibility='hidden';
    document.getElementById("chapter2").style.visibility='hidden';
    document.getElementById("chapter3").style.visibility='hidden';
}