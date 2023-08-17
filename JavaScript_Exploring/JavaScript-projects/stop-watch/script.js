

var seconds = "00";
var tens = "00";
var outputseconds = document.getElementById("seconds");
var outputtens = document.getElementById("tens");
var buttonstart = document.getElementById("btn_start");
var buttonstop = document.getElementById("btn_stop");
var buttonreset = document.getElementById("btn_reset");
var Interval;
buttonstart.addEventListener('click', () => {
    // console.log("start timer");
    clearInterval(Interval);
    Interval = setInterval(startTime, 10);
})
buttonstop.addEventListener('click', () => {
    clearInterval(Interval);
    // Interval=setInterval(startTimer,10);
})
buttonreset.addEventListener('click', () => {
    clearInterval(Interval);
    tens = "00";
    seconds = "00"
    outputseconds.innerHTML = seconds;
    outputtens.innerHTML = tens;
    // Interval=setInterval(startTimer,10);
});
function startTime() {
    tens++;
    if (tens <= 9) {
        outputtens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
        outputtens.innerHTML = tens;
    }
    if (tens > 99) {
        seconds++;
        outputseconds.innerHTML = "0" + seconds;
        tens = 0;
        outputtens.innerHTML = "0" + tens;
    }
    if (seconds > 9) {
        outputseconds.innerHTML = seconds;
    }
}
