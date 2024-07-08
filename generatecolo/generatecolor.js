let btn=document.querySelector("button");
btn.addEventListener("click",function(){
   let h3=document.querySelector("h3");
   let color=setRandomColor();
   h3.innerText=color;
   let div=document.querySelector("div");
   div.style.backgroundColor=color;

});
     
     
     
     
     
function setRandomColor(){
   let red=Math.floor(Math.random()*265);
   let green=Math.floor(Math.random()*265);
   let blue=Math.floor(Math.random()*265);
   let color=`rgb(${red},${green},${blue})`;
   return color;

}   
     
     
    
