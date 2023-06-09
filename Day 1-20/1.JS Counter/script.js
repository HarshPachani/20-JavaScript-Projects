(function(){
    console.log("Top");
    const buttons = document.querySelectorAll(".btn-counter");
    let count = 0;
    buttons.forEach(function(button){
        button.addEventListener("click", function() {
            if(button.classList.contains("Increment")){
                count++;
            } else if(button.classList.contains("Decrement")){
                count--;
            }

            const counter = document.querySelector("#counter");
            counter.textContent = count;

            if(count > 0){
                counter.style.color = "green";
            } else if(count < 0){
                counter.style.color = "red";
            } else {
                counter.style.color = "black";
            }
        })
        
    })
    console.log("End");
 }
)();