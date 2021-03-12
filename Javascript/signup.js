var btn=document.getElementById("btn");
btn.addEventListener("click",()=>{
 let email=document.getElementById("mail").value;
 let pass=document.getElementById("pass").value;
 localStorage.setItem("email",(email))
 localStorage.setItem("password",(pass))
})