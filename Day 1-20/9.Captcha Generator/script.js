let display = document.getElementById("status");
let body = document.body;
let submit = document.getElementById("submit");
let refresh = document.getElementById("refresh");
let char = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var captcha = "";

//Generates Captcha.
function generateCaptcha() {
    let char1 = char[Math.floor(Math.random() * char.length)];
    let char2 = char[Math.floor(Math.random() * char.length)];
    let char3 = char[Math.floor(Math.random() * char.length)];
    let char4 = char[Math.floor(Math.random() * char.length)];
    let char5 = char[Math.floor(Math.random() * char.length)];
    let char6 = char[Math.floor(Math.random() * char.length)];

    captcha = char1.toString() + char1.toString() +  char2.toString() + char3.toString() + char4.toString() + char5.toString() + char6.toString();

    return captcha;
}

// displaying captcha on loading of the page
body.onload = function generating() {
    captcha = generateCaptcha();

    document.getElementById("generator").value = captcha;
    
    display.innerText = "Captcha Generator";
};

submit.onclick = function checking() {
    let input = document.getElementById("client-text").value;

    if(input === "") {
        display.innerText = "Please enter the text shown below👇";
    } else if (input == captcha) {
        display.innerText = "Matched😎";
    } else {
        display.innerText = "Not Matched😖";
    }
};

refresh.onclick = function refreshing() {
    captcha = generateCaptcha();

    document.getElementById("generator").value = captcha;
    display.innerText = "Captcha Generator";
}