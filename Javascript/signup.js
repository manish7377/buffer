var btn=document.getElementById("btn");
btn.addEventListener("click",()=>{
 let email=document.getElementById("mail").value;
 let pass=document.getElementById("pass").value;
 localStorage.setItem("email",JSON.stringify(email))
 localStorage.setItem("password",JSON.stringify(pass))
})