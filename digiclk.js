let hr=document.getElementById("hrs");
let min=document.getElementById("mins");
let sec=document.getElementById("secs");
setInterval(()=>{
let cur_time=new Date();
hr.innerHTML=(cur_time.getHours()<10?"0":"")+cur_time.getHours();
min.innerHTML=(cur_time.getMinutes()<10?"0":"")+cur_time.getMinutes();
sec.innerHTML=(cur_time.getSeconds()<10?"0":"")+cur_time.getSeconds();
},1000)