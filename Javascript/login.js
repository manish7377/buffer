function check() {
    var email1 = localStorage.getItem("email")
    var password1 = localStorage.getItem("password")
    console.log(email1,password1)
    var x = document.getElementById("CE").value
    var y = document.getElementById("CP").value
    if (email1 == x && password1 == y) {
        window.location.href = "/Users/kaustubhmendhe/Documents/unit2/project/buffer/Buffer/HTML/loggedin.html"
    }
    else {
        alert("Wrong Password or Email")
    }
}

function account()
{
    location.href="/Users/kaustubhmendhe/Documents/unit2/project/buffer/Buffer/HTML/signup.html"
}