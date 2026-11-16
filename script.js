var body= document.body
var h1= document.querySelector("h1");

body.addEventListener("keydown",(val)=>{
    h1.innerHTML=val.code;
})