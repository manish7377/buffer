var v="block"

var one=document.querySelector(".one");
one.addEventListener("click",()=>{
    document.getElementById("one").style.display=`${v}` 
    event.stopPropagation()
})
var two=document.querySelector(".two");
two.addEventListener("click",()=>{
    document.getElementById("two").style.display=`${v}`
    event.stopPropagation()
})
var three=document.querySelector(".three");
three.addEventListener("click",()=>{
    document.getElementById("three").style.display=`${v}`
    event.stopPropagation()
})
var four=document.querySelector(".four");
four.addEventListener("click",()=>{
    document.getElementById("four").style.display=`${v}`
    event.stopPropagation()
})
var five=document.querySelector(".five");
five.addEventListener("click",()=>{
    document.getElementById("five").style.display=`${v}`
    event.stopPropagation()
})
var six=document.querySelector(".six");
six.addEventListener("click",()=>{
    document.getElementById("six").style.display=`${v}`
    event.stopPropagation()
})


var div5=document.querySelector(".div5");

div5.addEventListener("click",()=>{
  
      
        if(document.getElementById("one").style.display=="block"){
            document.getElementById("one").style.display="none"
            
           }
           if(document.getElementById("two").style.display=="block" ){
            document.getElementById("two").style.display="none"
  
           }
           if(document.getElementById("three").style.display=="block" ){
            document.getElementById("three").style.display="none"
  
           }
           if(document.getElementById("four").style.display=="block" ){
            document.getElementById("four").style.display="none"
  
           }
           if(document.getElementById("five").style.display=="block" ){
            document.getElementById("five").style.display="none"
  
           }
           if(document.getElementById("six").style.display=="block" ){
            document.getElementById("six").style.display="none"
  
           }
      
          
        // document.getElementById("one").style.display=`${v}`

        // document.getElementById("two").style.display=`${v}`

        // document.getElementById("three").style.display=`${v}`
        // document.getElementById("four").style.display=`${v}`

        // document.getElementById("five").style.display=`${v}`

        // document.getElementById("six").style.display=`${v}`
}
)