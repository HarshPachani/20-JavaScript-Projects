const Red = document.querySelector(".Red");
const Blue = document.querySelector(".Blue");
const Yellow = document.querySelector(".Yellow");
const all = document.querySelector(".all");

Red.addEventListener("click", () => {
    const red = document.querySelectorAll(".red");
    const blue = document.querySelectorAll(".blue");
    const yellow = document.querySelectorAll(".yellow");

    red.forEach((red) => {
        red.style.display = "block";
    })

    yellow.forEach((yellow) => {
        yellow.style.display = "none";  
    })

    blue.forEach((blue) => {
        blue.style.display = "none";
    });
})


Blue.addEventListener("click", () => {
    const red = document.querySelectorAll(".red");
    const blue = document.querySelectorAll(".blue");
    const yellow = document.querySelectorAll(".yellow");
      
    blue.forEach((blue) => {
        blue.style.display = "block";
    })

    red.forEach((red) => {
        red.style.display = "none";  
    })

    yellow.forEach((yellow) => {
        yellow.style.display = "none";
    });
})

Yellow.addEventListener("click", () => {
    const red = document.querySelectorAll(".red");
    const blue = document.querySelectorAll(".blue");
    const yellow = document.querySelectorAll(".yellow");
      
    yellow.forEach((yellow) => {
        yellow.style.display = "block";
    })

    red.forEach((red) => {
        red.style.display = "none";  
    })

    blue.forEach((blue) => {
        blue.style.display = "none";
    });
})

all.addEventListener("click", () => {
    const red = document.querySelectorAll(".red");
    const blue = document.querySelectorAll(".blue");
    const yellow = document.querySelectorAll(".yellow");
      
    yellow.forEach((yellow) => {
        yellow.style.display = "block";
    })

    red.forEach((red) => {
        red.style.display = "block";  
    })

    blue.forEach((blue) => {
        blue.style.display = "block";
    });
})