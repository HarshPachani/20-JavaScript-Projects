(function () {
    const buttons = document.querySelectorAll(".btn-counter");
    console.log("buttons: ", buttons);
    let count = 0;

//     adding event listener and increase decrease function
    buttons.forEach(function(button) {
        button.addEventListener('click', function () {
            if (button.classList.contains("decrease-btn")) {
                console.log("Decrease Clicked");
                count--;
            } else if (button.classList.contains("increase-btn")) {
                console.log("Increase Clicked");
                count++;
            }

            const counter = document.querySelector(".counter-machine");
            counter.textContent = count;
            
            if (count > 0) {
                counter.style.color = "green";
            } else if (count < 0) {
                counter.style.color = "#f0ad4e";
            } else {
                counter.style.color = "#fff"
            }
        })
    })
}) ()
