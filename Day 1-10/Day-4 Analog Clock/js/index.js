const deg = 6;
const hr = document.querySelector("#hr");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotatez(${(hh) + (mm/12)}deg)`;
    min.style.transfom = `rotatez(${mm}deg)`;
    sec.style.transfom = `rotatez(${ss}deg)`;
})