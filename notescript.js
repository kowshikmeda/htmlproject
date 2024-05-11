const noteContainer=document.querySelector(".notes-container");
const createBtn=document.querySelector(".btn");
let notes=document.querySelectorAll(".input-box");
function updateStorage(){
    localStorage.setItem("notes",noteContainer.innerHTML);
}
function showNotes(){
    notes.innerHTML=localStorage.getItem("notes");
}
showNotes();
createBtn.addEventListener("click",()=>{
    let inputbox =document.createElement("p");
    let img=document.createElement("img");
    inputbox.className="input-box";
    inputbox.setAttribute("contenteditable","true");
    img.src="/home/rguktrkvalley/Pictures/img/delete_6861362.png";
    noteContainer.appendChild(inputbox).appendChild(img);
})
noteContainer.addEventListener("click",function(e){
    if(e.target.tagName ==="IMG")
    {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName ==="P")
    {
        notes=document.querySelectorAll(".input-box");
        notes.forEach(nt =>{
            nt.onkeyup=function(){
                updateStorage();
            }
        })
    }
})
document.addEventListener("keydown",event=>{
    if(event.key==="enter")
    {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})