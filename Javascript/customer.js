var btn=document.querySelector(".div2>button");
btn.addEventListener("click",()=>{
    location.href="https://twitter.com/bufferlove"
})

var one=document.getElementById("one");
one.addEventListener("click",()=>{
    document.querySelector(".one").style.display="flex";
    document.querySelector(".two").style.display="none";
    document.querySelector(".three").style.display="none";
    
})

var two=document.getElementById("two");
two.addEventListener("click",()=>{
    document.querySelector(".one").style.display="none";
    document.querySelector(".two").style.display="flex";
    document.querySelector(".three").style.display="none";
  
})

var three=document.getElementById("three");
three.addEventListener("click",()=>{
    document.querySelector(".one").style.display="none";
    document.querySelector(".two").style.display="none";
    document.querySelector(".three").style.display="flex";
    
})

