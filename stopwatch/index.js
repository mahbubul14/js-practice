let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
// let seconds = document.getElementById("seconds");
// let items = document.getElementById("items");

let timerDisplay = document.querySelector(".timer-display")

let msec = 00;
let secs = 00;
let mins = 00;
let timerId = null;

start.addEventListener('click', ()=>{
    if(timerId !==null) {
        clearInterval(timer)
    }
    setInterval(startTimer,10)
})
const startTimer = () => {
    msec++;
    if(msec == 100){
        msec = 0;
        secs++;
        if(secs == 60) {
            secs = 0;
            mins++;
        }
    }
}
