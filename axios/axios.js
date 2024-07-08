let url="https://catfact.ninja/fact";

let button=document.querySelector("button");
button.addEventListener("click",async()=>{
   let fact=await getFacts();
   console.log(fact);
   let p=document.querySelector("p");
   p.innerText=fact;
});
async function getFacts(){
    try{
        let res=await axios.get(url);
         return (res.data.fact);
    
    }catch(e){
        return "No facts";
    }
 }


 //dogs
//  let url2="https://dog.ceo/api/breeds/image/random";


//  let btn2=document.querySelector("#button2");
//  btn2.addEventListener("click",async()=>{
//     let link=await getImage();
//    let img=document.querySelector("img");
//   img.setAttribute("src",link);

//  });
// async function getImage(){
//     try{
// let res=await axios.get(url2);
// return res.data.message;
//     }catch{
//         console.log("No Image ");
//     }
// }

//search


let url3="htps://universities.hipolabs.com/search?name=";

async function getcollege(country){
    try{
      let res= await axios.get(url+country);
      return res.data;
    }catch{
        console.log("No results");
        return [];
    }
}

let btn3=document.querySelector("#button3");
btn3.addEventListener("press",async()=>{
    let country=document.querySelector("input").value;
  
    console.log(country);
   let collges= getcollege(country);
show(collges);
});
function show(collges){
    let list=document.querySelector("#list");
    for(coll of collges){
        let li=document.createElement("li");
        li.innerText=coll.name;
        list.appendChild(li);
    }
}
