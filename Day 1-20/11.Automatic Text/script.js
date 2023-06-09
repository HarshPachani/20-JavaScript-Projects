let text = document.getElementById("text");
let sentance = "Harsh Pachani";

let index = 1;

//This is the speed of letters coming in.
let speedChanger = 250;

function writingSentence() {
    text.innerHTML = sentance.slice(0, index);
    // console.log(sentance.slice(0, index));
    index++;

    if(index > sentance.length){
        index = 1;
    }
    setTimeout(writingSentence, speedChanger);
}
writingSentence();