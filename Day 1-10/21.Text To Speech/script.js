const userText = document.getElementById("inputText");
const speechBtn = document.getElementById("speech");

speechBtn.addEventListener("click", () => {
    speechText = userText.value;
    
    let speechData = new SpeechSynthesisUtterance();
    
    if (userText.value === "") {
        speechData.text = "Enter a text first";
    }
    else{
        speechData.text = speechText;    
    }

    speechSynthesis.speak(speechData);
})