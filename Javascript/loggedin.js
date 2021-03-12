var email1=document.getElementById("email11")
email1.innerHTML=localStorage.getItem("email")

// --------------------

function open1(evt, info) {
            
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(info).style.display = "block";
    evt.currentTarget.className += " active";
}
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
function pay()
{
    var data=document.getElementById("in").value
    if(data.length<=0)
    {
        alert("Enter valid Card Number")
    }
    else
    {
        alert("Payment is Successfull")
    }
   
}
function changeE()
{
    var x=document.getElementById("email").value
    localStorage.setItem("Email",x)
}
function changeP()
{
    var x=document.getElementById("pass").value
    localStorage.setItem("Password",x)
}
function org()
{
    var x=document.getElementById("org").value
    localStorage.setItem("Organization",x)
}
function delet()
{
    localStorage.clear()
}
function go()
{
    location.href="https://buffer.com/legal#gdpr"
}