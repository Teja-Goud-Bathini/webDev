let gameseq=[];
let userseq=[];
let started=false;
let level=0;
let btns=["btn1","btn2","btn3","btn4"];

let h3=document.querySelector("h3");
document.addEventListener("keypress",function(){
if(started==false){
    console.log("game started");
    started=true;
    levelup();
}
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);
}

function levelup(){
    level++;
    h3.innerText=`Level ${level}`;
    let randomIdx=Math.floor(Math.random()*3);
    let randomColor=btns[randomIdx];
    let randombtn=document.querySelector(`.${randomColor}`);
   gameseq.push(randomColor);
   console.log(gameseq);
   gameFlash(randombtn);
}

function checkAns(){
    let idx=level-1;
    if(userseq[idx]===gameseq[idx]){
        console.log("Same Value");
    }
    else{
      h3.innerText=`Game Over${level}`;
    }
}

function btnPress(){
    console.log(this); 
    let btn=this;
    userFlash(btn);
    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    checkAns();

}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
   btn.addEventListener("click",btnPress);
}