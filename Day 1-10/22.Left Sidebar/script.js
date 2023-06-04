const hamburger = document.getElementById("hamburger");
const lines = document.querySelectorAll(".line");
const lists = document.getElementById("lists");
const span = document.querySelector(".span");

hamburger.addEventListener("click", () => {
    lists.classList.toggle("active");
    hamburger.classList.toggle("active");
    span.classList.toggle("active");
})

span.addEventListener("click",() => {
    lists.classList.remove("active");
    hamburger.classList.remove("active");
    span.classList.remove("active");
})