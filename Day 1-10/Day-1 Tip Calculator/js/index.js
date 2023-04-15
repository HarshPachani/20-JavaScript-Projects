function tipCalculator() {
    var billAmount = document.getElementById("bill").value;
    var serviceQuality = document.getElementById("service").value;
    
    if(billAmount === "" || serviceQuality == 0) {
        alert("Please enter required values!");
    }
}