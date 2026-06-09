const birthday = new Date("2026-08-04 00:00:00").getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function format(num){
    return num < 10 ? "0" + num : num;
}

function updateCountdown(){
    const now = new Date().getTime();
    const diff = birthday - now;

    if(diff <= 0){
        daysEl.innerText = "00";
        hoursEl.innerText = "00";
        minutesEl.innerText = "00";
        secondsEl.innerText = "00";
        clearInterval(timer);
        return;
    }

    const days = Math.floor(diff / (1000*60*60*24));
    const hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
    const minutes = Math.floor((diff % (1000*60*60)) / (1000*60));
    const seconds = Math.floor((diff % (1000*60)) / 1000);

    daysEl.innerText = format(days);
    hoursEl.innerText = format(hours);
    minutesEl.innerText = format(minutes);
    secondsEl.innerText = format(seconds);
}

const timer = setInterval(updateCountdown, 1000);
updateCountdown();

function createConfetti() {
    const container = document.getElementById("soliut-container");
    const colors = ["#ff4d6d", "#ffd93d", "#6bcB77", "#4d94ff", "#ff6f61"];

    for(let i=0; i<100; i++){
        const confetti = document.createElement("div");
        confetti.classList.add("soliut");
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
        confetti.style.width = 5 + Math.random()*10 + "px";
        confetti.style.height = 5 + Math.random()*10 + "px";
        container.appendChild(confetti);
        confetti.addEventListener("animationend", () => {
            confetti.remove();
        });
    }
}

const switchBtn = document.getElementById("switch");
const nextBtn = document.getElementById("nextBtn");

switchBtn.addEventListener("change", () => {
    if(switchBtn.checked){
        createConfetti();
        document.querySelector(".smoke").style.opacity = "1";
        setTimeout(() => { nextBtn.style.display = "block"; }, 2000);
    }
});

const audio = document.querySelector("audio");
const playBtn = document.querySelector(".play-btn");

playBtn.addEventListener("click", () => {
    audio.play();
});

for (let i = 0; i < 60; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    const sz = 1 + Math.random() * 2;
    s.style.cssText = `width:${sz}px;height:${sz}px;top:${Math.random()*100}vh;left:${Math.random()*100}vw;animation-duration:${1.5+Math.random()*3}s;animation-delay:${Math.random()*4}s`;
    document.body.appendChild(s);
}

const colours = ['#ff4d6d','#ffb3c6','#ffd6e0','#f0c060','#ffffff'];
for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const sz = 3 + Math.random() * 5;
    p.style.cssText = `width:${sz}px;height:${sz}px;left:${Math.random()*100}vw;background:${colours[Math.floor(Math.random()*colours.length)]};animation-duration:${12+Math.random()*14}s;animation-delay:${Math.random()*14}s`;
    document.getElementById('particles').appendChild(p);
}