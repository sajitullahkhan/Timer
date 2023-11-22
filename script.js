let play = document.querySelector('.play');
let reset = document.querySelector('.reset');
let hh = document.querySelector('.hh');
let mm = document.querySelector('.mm');
let ss = document.querySelector('.ss');
let start;

let [hours, minutes, seconds] = [0, 0, 0];
let startTime;

function runTimer() {
    startTime = setInterval(() => {
            let miliSec = Date.now() - start;
            seconds = Math.floor(miliSec / 1000);
            ss.textContent = seconds;
            if(seconds === 60) {
                start = Date.now();
                minutes++;
                mm.textContent = minutes;
                ss.textContent = 0;
              }
              if(minutes === 60) {
                  minutes = 0;
                  mm.textContent = minutes;
                  hours++;
                  hh.textContent = hours;
              }
        },100)
}

let clicked = 0;
play.addEventListener('click', () => {
    if(clicked === 0) {
        play.innerHTML = `<i class="ri-pause-line"></i>`;
        clicked++;
        start = Date.now();
        runTimer();
        
    }else if(clicked !== 0){
        clicked = 0;
        play.innerHTML = `<i class="ri-play-line"></i>`;
        clearInterval(startTime)
        
    }
});

reset.addEventListener('click', () => {
    hh.textContent = '';
    mm.textContent = '';
    ss.textContent = '';
    play.innerHTML = `<i class="ri-play-line"></i>`;
    clicked = 0;
    clearInterval(startTime);
});