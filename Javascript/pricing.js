var publish = document.getElementById("publish");
var analyse = document.getElementById("analyse");
publish.addEventListener("click", () => {
    publish.style.backgroundColor = "white";
    analyse.style.backgroundColor = "lightgray";
})

analyse.addEventListener("click", () => {
    analyse.style.backgroundColor = "white";
    publish.style.backgroundColor = "lightgray";
})

var comparison = document.getElementById("comparison");
comparison.addEventListener("click", () => {
    comparison.style.backgroundColor = "lightgreen";

})

var signup = document.getElementById("signup");
signup.addEventListener("click", () => {
    location.assign("signup page");

})
