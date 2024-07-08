// let str="TEja Bathini";
// first=str.slice(0,4)
// console.log(first);

// let pavan=str.replace("TEja", "pavan");
// console.log(pavan);
// console.log(pavan.replace("p", "P"));
// console.log(pavan.trim().toUpperCase());
// let students=[["teja","Virat","rohith"],["pavan","Virat","rohith"],["june","Virat","rohith"]];
// for(let i=0;i<students.length;i++){
//     console.log('Outer Loop ',i+1)
//     for(let j=0;j<students[i].length;j++){
//         console.log(students[i][j]);
//     }
// }
// let favMovie="AA";
// let movie=prompt("ENter the movie name");
// while(movie!=favMovie && movie!="Quit"){
//     console.log("You ENtered Wrong ");
//    movie= prompt("please Enter Again");
// }
// if(movie===favMovie){
//     console.log("COngrats");
// }
// else{
//     console.log("YOu Quit The GAme");
// }

// let arr=[1,2,3,4,2,5,6];
// console.log(arr);
// let arr2=[];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]!="2"){
//         arr2[i]=arr[i];
//     }
// }
// console.log(arr2);
// let num=prompt("ENter A Number");


//factorial of a num

// let  fact=1;
// for(let i=1;i<=num;i++){
//     fact=fact*i;
// }
// console.log(fact);
 


//counting digits

// let count=0;
// while(num>0){
//     num=num/10;
//    count=count+1;
// }
// console.log(count);



//sum of the number

// let sum=0;
// let rem=0;
// while(num>0){
//     rem=num%10;
//     sum=sum+rem;
//     num=num/10;
// }
// console.log(sum);
//object creation in js
// let Student={
//     name:"Teja",
//     age:20,
//     marks:91,
//     city:"Siddipet"
// };
// let username={
//     username:"TejaBAtthini",
//     content:"This is my !St post",
//     likes:290,
//     tags:["rgukt","SIddipet","Telangana"]
// };

// const obj={
//     1:"a",
//     2:"b",
//     true:'c',
//     null:"d",
//     undefined:"f"
// }


//Nested Objects
// const classInfo={
//     teja:{
//         grade:"A",
//         city:"Siddipet"
//     },
//     pavan:{
//         grade:"A",
//         city:"Hyderbad"
//     },
//     john:{
//         grade:"A",
//         city:"AMerica"
//     }
// };
//Array Objects
// const studentInfo=[
//     {
//         name:"TEja",
//         grade:"A+",
//         city:"DElhi"
//     },
//     {
//         name:"PAvan",
//         grade:"A+",
//         city:"DElhi"
//     },
//     {
//         name:"John",
//         grade:"A+",
//         city:"DElhi"
//     }
// ];


//gues a number 
// let num=prompt("Enter a   max Num");
// const random=Math.floor(Math.random()*num)+1;
// let guess=prompt("Guess the num");
// while(true){
//     if(guess=="quit"){
//         console.log("You quit the game");
//         break;
//     }
//     if(guess==random){
//         console.log("COngrats");
//         break;
//     }
//     else if(guess>random){
//         guess=prompt("Hint you entered largeer num please enter smmaler number"); 
//     }
//     else if(guess<random){
//         guess=prompt("Hint you entered Smaller num please enter Larger number"); 
//     }
  
// }
// const num=prompt("ENter max num");
// let random=Math.floor(Math.random()*num)+1
// console.log(random);

// const car={
//     name:"Benz",
//     model:2022,
//     color:"Black"
// };
// let person={
//     name:"Teja",
//     age:20,
//     city:"telangana"
// };


//functions

// teja();
// function teja(){
//     console.log("My Name is TEja")
// }

// function randomNum(){
//     let random=Math.floor(Math.random()*6)+1;
//     console.log(random);
// }
// randomNum();

// function printInfo(name, age){
//     console.log(`${name}'s age is ${age}`);
// }
// printInfo("teja",21);
// let num=prompt("Enter  a num");
// let num2=prompt("Enter another num");
// table(num);

// function table(num){
//     for(let i=1;i<=10;i++){
//         console.log(`${num} x ${i} = ${num*i}`);
//     }
// }


// let sum=add(add(1,2),3);
// console.log(sum);
// function add(a,b){
//     return a+b;
// }
// let age=15;
// console.log(isadult(age));
// function isadult(a){
//     if(a>=18){
//         return "Adult";
//     }
//     else{
//         return "Not Adult";
//     }
// }

//sum of n numbers

// let num=5;
// console.log(sumOfN(num));
// function sumOfN(n){
//     let sum=0;
//     for(let i=0;i<=n;i++){
//         sum+=i;
//     }
//     return sum;

// }



// let str=["hi","hello","bye"]; 
// console.log(concat(str));
// function concat(str){
//     let arr="";
//     for(let i=0;i<str.length;i++){
//         arr+=str[i];
//     }
//     return arr;
// }

// let sum=function(a,b){
//     return a+b;
// }
// console.log(sum(1,2));
// let hello=function(){
//     console.log("Hello");
// }
// hello();



//multiple functions calling
// const greet=function(){
//     console.log("HEllo TEja");
// }
// printgreet(greet,2);
// function printgreet(fun,n){
//     for(let i=0;i<n;i++){
//         fun();
//     }
// }


//odd or even TEst
// function oddeventest(request){
//     if(request=="odd"){
//         let odd=function(n){
//             console.log(n%2!=0);
//         }
//         return odd;
//     }
//     if(request=="even"){
//         let even=function(n){
//             console.log(n%2!=0);
//         }
//         return even;
//     }
// }
// oddeventest("even");


//METHODS: FUNCTION INSIDE THE ON=BJECT IS CALLED  mETHOD
// const calc={
//      add:function(a,b){
//         return a+b;
//     },
//     sub:function(a,b){
//         return a-b;
//     },
//     mul:function(a,b){
//         return a*b;
//     },  
//     div:function(a,b){
//         return a/b;
//     }

// };
//shortcut
// const calc={
//     add(a,b){
//         return a+b;
//     },
//     sub(a,b){
//         return a-b;
//     },
//     mul(a,b){
//         return a*b;
//     }
// };

//part6 questions
//elements greater then a num
// const arr=[1,2,3,4,5,6];
// let num=3;
// largest(arr,num);
// function largest(arr,num){
    
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>num){
//            console.log(arr[i]);
//         }
//     }
    
// }
// let str= prompt("ENter a string");
// let count=0;


// for(let i=0;i<str.length;i++){
  
//     if(
//     str.charAt(i)=="a"||
//     str.charAt(i)=="e"||
//     str.charAt(i)=="i"|| 
//     str.charAt(i)=="o"||
//     str.charAt(i)=="u"){
//         count++;

//     }
    
// }
// console.log(count);
// let start=100;
// let end=200;
// function generateRandom(start,end){
//     let diff=end-start;
//     return Math.floor(Math.random()*diff)+start;
// }
// console.log(generateRandom(start,end));

// let country=["America","germany","United states of America"];
// function longestname(country){
//     let ans=0;
//     for(let i=0;i<country.length;i++){
//         let anslen=country[ans].length;
//         let currlen=country[i].length;
//         if(currlen>anslen){
//             ans=i;
//         }
//     }
//     return country[ans];
// }
// console.log(longestname(country));

// let arr=[1,2,3];
// arr.forEach(function(el){
//     console.log(el)
    
// });
// function print(el){
//     console.log(el);
// };
// arr.forEach(print);

//array objexts
// let arr=[
//     {
//         name:"teja",
//         marks:21,
//     },
//     { name:"pavan",
//     marks:29,},
//     {
//         name:"jio",
//         marks:99,
//     }
// ];
// arr.forEach((students)=>{
//     console.log(students);
//     console.log(students.marks);
// });

// let num=[1,2,3,4];
// let double=num.map((el)=>{
//     return el*el;
// });

//array methods
//reduce method max of array
//  let arr=[10,20,30];
// let max=-1;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i];
//     }
// }
// console.log(max);
// let max=arr.reduce((res,el)=>{
//     if(res>el){
//         return res;
//     }
//     else return el;
// });
// console.log(max);
// let arr=[10,20];

// let boole=arr.every((el)=> el%10==0);
// console.log(boole); 
// let arr=[44,45];
// let min=arr.reduce((res,el)=>{
//     if(el<res){
//         return el;
//     }
//     else return res;
// });

//array copy 
// let arr=[12,13,14,15];
// let newarr=[...arr]
// console.log(arr);
// console.log(newarr);

// let even=[2,4,6,8];
// let odd=[1,3,5,7];
// let nums=[...even , ...odd];


 //printing continously for the set intervals  
// let id= setInterval(()=>{
//     console.log("teja");
// },2000);
// console.log(id);
// let id2=setInterval(()=>{
//     console.log("Hello");
// },2000);
// console.log(id2);


//timeout tharvatha print iythad
// console.log("hello");
// setTimeout(()=>{
//     console.log("Teja");
// },2000);

//square by using arrow function
// let square=((n)=>{
//     return n*n;
// }); 
//or 
// let square=(n)=> n*n;


// let id= setInterval(()=>{
//     console.log("Teja");
// },2000);
// setTimeout(()=>{
//     clearInterval(id);
// },10000); 

// const student={
//     name:"TEja",
//     age:18,
//     branch:"ece",
//     eng:100,
//     phy:40,
//     maths:50,
//     getAvg(){
//         let avg=(this.eng+this.maths+this.phy)/3;
//         console.log(`${this.name} got avg marks is ${avg}`);
//     }

// }

//arrow function
// const sum=(a,b)=>{
//     console.log(a+b);
// };
// const pow=(a,b)=>{
//     return a**b;
// };
// const hello=()=>{
//     console.log("helo");
// };
// const mul=(a,b)=> a+b;

// let arr=[1,2,3,4,5];

// let add=((arr)=>{
//     let sum=0;
//     for(let num of arr){
//         sum=sum+num;
    
//     }
//     return sum;
// });
// console.log(add(arr));

// let isEven=(n)=> n%2==0;

//map
// let arr=[1,2,3,4,4,5,6];
// let square=arr.map((el)=>{
//     return el*el;
// });

// let even=arr.filter((el)=> { 
//    return  el%2==0;
// });


//destrustor
// let name=["teja","bathini","pavan"];
// let [winner,looser]=name;
// console.log(winner,looser);
// //obj desstuctor
// let obj={
//     name:"teja",
//     age:19,
//     college:"rgukt",
//     branch:"Ece"
// };
// let{name:ob,age:o2,...remaing}=obj;
// console.log(ob,o2,remaing);


//squre sum of the array using arrow fun

//  let arr=[1,2,3,4];
// let result=arr.reduce((sqr,el)=>{
//     return sqr+(el)*(el);
// });
// let square=arr.map((el)=>{
//     return el*el;
// });

// let sum=square.reduce((res,el)=>{
//     return res+el;
// });

// let plusfive=arr.map((el)=>{
//     return el+5;
// });
// let str=["teja","pavan"];
// // for(let i=0;i<str.length;i++){
// //     console.log(str[i].toUpperCase());
// // }
// console.log(str.map((el)=> el.toUpperCase()));
// let doubleAndReturnArgs=(arr,...args)=>[
//     ...arr,
//     ...args.map((v)=>v*2),
// ];
// console.log(doubleAndReturnArgs([2,3,4],1,23));

// let obj1={
//     first:"name",
//     second:"age"
// };
// let obj2={
//     third:"p",
//     fourth:"d"
// };
// let mergeObjects=(obj1,obj2)=>({
//     ...obj1,
//     ...obj2
// }
// );
// let containers=document.getElementsByClassName("container");
// for(let i=0;i<=containers.length;i++){
//     containers[i].outerText="container";
//     console.log(`value of container no.${i} is changed`);
// }
// document.getElementsByTagName("h1");

// console.dir(document.querySelector('h1'));
// console.dir(document.querySelector('.container'));
// console.dir(document.querySelector('#button'));


// let heading=document.querySelector('h1');
// heading.style.color='yellow';
// heading.style.backgroundColor='red';

// let pk=document.querySelector(".container");
// pk.backgroundColor='blue';

//operating css class without adding class in html
// let heading=document.querySelector('h1');
// heading.classList.add("green");
// heading.classList.add("underline");
// heading.classList.remove("green");
// heading.classList.toggle("green");// on =>off  
// heading.classList.add("green");// off => on

// let addyellow=document.querySelector(".container");
// addyellow.classList.add("yellow");


//cerating elemnts

// document.createElement('p');
// let newp=document.createElement('p');
// newp.innerText="Hi Iam new Para";
// let body=document.querySelector('body');
// body.append(newp);
// let div=document.querySelector('.div');
// div.append(newp);

// let b1=document.createElement('button');
// b1.innerText="Button";
// div.insertAdjacentElement('beforebegin',b1);
// //b1.remove();

// let p=document.createElement('p');
// p.innerText="HEy Im Red";
// p.classList.add("a");
// let body=document.querySelector('body');
// body.append(p);
// let h3=document.createElement('h3');
// h3.textContent="Hey im blue H3";
// h3.classList.add("an");
// body.append(h3);


// let div=document.createElement('div');
// let h1=document.createElement('h1');
// let p1=document.createElement('p1');
// h1.innerText="Hey Im i a div";
// p1.innerText="me too";
// div.append(h1);
// div.append(p1);
// body.append(div);
// div.classList.add("div2");


// let input=document.createElement('input');
// let button=document.createElement("button");
// button.innerText="Click Me!!";
// let body=document.querySelector('body');
// body.append(input);
// body.append(button);

// button.setAttribute("id", "btn");
// input.setAttribute("placeholder", "username");

// let btn=document.querySelector("#btn");
// btn.classList.add("buttonstyle");

// let h1=document.createElement("h1");
// h1.innerText="DOM pRactice";
// h1.classList.add('underline');
// body.append(h1);
// let p=document.createElement('p');

// p.innerHTML="apna college<b>Delta</b> Practice";
// body.append(p);


// let h1=document.querySelector("h1");
// function changeColor(color,delay,nextColor){
//     setTimeout(()=>{
//         h1.style.color=color;
//         if(nextColor) nextColor();
//     },delay);
// }

// changeColor("green",1000,()=>{
//     changeColor("yellow",1000,()=>{
//         changeColor("pink",1000);
//     });
// });


// function savetoDB(data,sucess,fail){
//     let InternetSpeed=Math.floor(Math.random()*10)+1;
//     if(InternetSpeed>4){
//         sucess();
//     }
//     else{
//         fail();
//     }
// }
// savetoDB("teja",()=>{
//     console.log("Success your data Savedx ");
//     savetoDB("teja",()=>{
//         console.log("Success inner ");
//         savetoDB("teja",()=>{
//             console.log("Success3 your data Savedx ");
//         },()=>{
//             console.log("fail 3")
//         });
//     },()=>{
// console.log("Fail2 ")
//     }
//     );
// },
// ()=>{
//     console.log("Failed to save Please try again");
// }
// )


//promising


// function savetoDB(data){
//     return new Promise((resolve,reject)=>{
//         let InternetSpeed=Math.floor(Math.random()*10)+1;
//         if(InternetSpeed>4){
//             resolve("Sucess: Your data Was Saved");
//         }
//         else{
//             reject("FAiled: data not saved");
//         }
//     });
// }

// let request=savetoDB("TEja");
// request.then(()=>{
//     console.log("promise resolved");
//     console.log(request);
// })
// .catch(()=>{
// console.log("PRomise Reject");
// console.log(request);
// });

// savetoDB("TEja").then(()=>{
//     console.log("promise resolved");
//     console.log(request);
//     savetoDB("teja").then(()=>{
//         console.log("data 2 saved");
//     })
// })
// .catch(()=>{
// console.log("PRomise Reject");
// console.log(request);
// });

let h1=document.querySelector("h1");


function changeColor(color,delay){
    return new Promise ((resolve, reject)=>{
        setTimeout(()=> {

            let randomNum=Math.floor(Math.random()*5)+1;
            if(randomNum>3){
                reject("promise Rejected");
            }
            h1.style.color=color;
            console.log(`color changed to${color}`);
            resolve("color changed");
        },delay);
    });
}
async function demo(){
    try{
    await changeColor("red",1000);
    await changeColor("yellow",1000);
    await changeColor("green",1000);
    changeColor("blue",1000);
    }catch(err){
        console.log("Error catch");
        console.log(err);
    }
    let a=10;
    console.log(`A=${a}`);
}
