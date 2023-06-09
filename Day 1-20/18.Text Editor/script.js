const boldBtn = document.getElementById("bold");
const italicBtn = document.getElementById("italic");
const strikeBtn = document.getElementById("strike");
const underlineBtn = document.getElementById("underline");
const caseBtn = document.getElementById("case");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const centerBtn = document.getElementById("center");
const justifyBtn = document.getElementById("justify");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
let textArea = document.getElementById("textInputArea");

let lists = document.querySelectorAll("li");
Array.from(lists).forEach( (listItem) => {
    listItem.addEventListener("click", () => {
        listItem.classList.toggle("active");
    })
})

addingEventListner(boldBtn, "bold");
addingEventListner(italicBtn, "italic");
addingEventListner(underlineBtn, "underline");
addingEventListner(strikeBtn, "strike");
addingEventListner(caseBtn, "case");
addingEventListner(leftBtn, "alignLeft");
addingEventListner(rightBtn, "alignRight");
addingEventListner(centerBtn, "alignCenter");
addingEventListner(justifyBtn, "alignJustify");

function addingEventListner (listner, className) {
    listner.addEventListener("click", () => {
        textArea.classList.toggle(className);
    })
};

let size = 14;
increaseBtn.addEventListener("click", () => {
    let textAreaValue = textArea.value;
    size += 1;
    textArea.style.fontSize = size + "px";
});

decreaseBtn.addEventListener("click", () => {
    let textAreaValue = textArea.value;
    size += 1;
    textArea.style.fontSize = size + "px";
});