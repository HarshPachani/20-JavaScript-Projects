const scrollIndi = document.getElementById("scrollIndicator");
const height = window.document.body.scrollHeight - window.innerHeight;

console.log("window.document.body.scrollHeight: ", window.document.body.scrollHeight);
console.log("window.innerHEIGHt: ", window.innerHeight);
console.log("Height: ", height);

window.addEventListener("scroll", () => {
    const percent = (window.scrollY / height) * 100;
    console.log("Percent: ", percent);
    scrollIndi.style.width = percent + "%";
})