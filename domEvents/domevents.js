//  let btn=document.querySelector("button");
// btn.onclick=function(){
//     console.log("button was clicked");
// };


// let btns=document.querySelectorAll("button");
// function hello(){
//     alert("HEllo");
// }
// function name(){
//     alert("name");
// }
// function click(){
//     console.log("You are on the btn");
// }
// for(b of btns){
//     b.onclick=hello; 
//    b.onmouseenter=click;
// }

// for(b of btns){
//     // b.addEventListener("click", hello);
//     // b.addEventListener("click", name);
//      b.addEventListener("dblclick",function(){
//         console.log("You double clicked me two tyms");
//     });
// }
// console.dir(btns);
// let p=document.querySelector("p");
// p.addEventListener("click",function(){
//     console.log("para Clicked");
// });
// let box=document.querySelector(".box");
// box.addEventListener("mouseenter",function(){
//     console.log("you enterd to div");
// });
// let bu=document.querySelector("button");
// bu.addEventListener("click",function(){
//     console.log(this.innerText);
//     bu.style.backgroundColor="blue"; 
// });

//key board
// let inp=document.querySelector("input");
// inp.addEventListener("keydown",function(event){
//     console.log("key =",event.key);
//     console.log("code =",event.code);
//     console.log("key pressed");
// });
//form
// let form=document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     let user=document.querySelector("#user");
//     let pass=document.querySelector("#pass");
//     console.log(user.value);
//     console.log(pass.value);
// alert(`hi ${user.value},your passwor is set to ${pass.value}`);
//    alert("Form Submited");
// });


let p=document.querySelector("#para");

let inp=document.querySelector("#text");
inp.addEventListener("input",function(){
   p.innerText=inp.value;
})

