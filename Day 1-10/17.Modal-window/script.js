const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelector(".show-modal");


//Creating a function which will contain all the actions that will get executed when show-modal button is clicked.
const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

// Creating a function which will contain all the actions that will get executed when user want to close modal window.
const closeModal = function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

btnOpenModal.addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);

//when use clicks outside of the modal window.
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function(event) {
    if(event.key == "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});