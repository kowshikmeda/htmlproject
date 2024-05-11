let scrollContainer=document.querySelector(".gallery");
let backbtn=document.getElementById("backbtn");
let nxtbtn=document.getElementById("nxtbtn");
scrollContainer.addEventListener("wheel",(evt)=>
{
    evt.preventDefault();
    scrollContainer.scrollLeft+=evt.deltaY;
    scrollContainer.style.scrollBehaviour="auto";
})
backbtn.addEventListener("click",()=>{
 scrollContainer.style.scrollBehaviour="smooth";
 scrollContainer.scrollLeft+=900;
})
nxtbtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehaviour="smooth";
    scrollContainer.scrollLeft-=900;
   })