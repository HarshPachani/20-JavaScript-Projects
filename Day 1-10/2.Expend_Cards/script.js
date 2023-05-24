const panels = document.querySelectorAll(".panel");

panels.forEach(panel => {
    panel.addEventListener("click", () => {
        removingActiveClass();
        panel.classList.add("active");
    })
})

function removingActiveClass(){
    panels.forEach(panel => {
        panel.classList.remove("active");
    })
}

//dark mode toggle
var selector = document.body;
function modeChanger(){
    console.log(selector.classList);
    selector.classList.toggle("dark-mode");
}