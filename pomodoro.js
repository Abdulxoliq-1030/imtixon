const min = document.getElementById("minut");
let sec = document.getElementById("sekund");
const pomodoroBtn = document.getElementById("pomodoro");
const shorBreakBtn = document.getElementById("shortBreak");
const longBreakBtn = document.getElementById("longBreak");
const title = document.getElementsByTagName("title")[0];
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const refreshBtn = document.getElementById("refreshBtn");

let m;
let minut;
let s = 0;

startBtn.disabled = true;
refreshBtn.disabled = true;

pomodoroBtn.addEventListener("click", () => {
  m = 25;
  minut = 25;
  s = 00;

  min.innerText = "25";
  sec.innerText = "00";
  startBtn.disabled = false;
  refreshBtn.disabled = false;
  clearInterval(timer);
});

shorBreakBtn.addEventListener("click", () => {
  m = 5;
  minut = 5;
  s = 00;

  min.innerText = "05";
  sec.innerText = "00";
  startBtn.disabled = false;
  refreshBtn.disabled = false;
  clearInterval(timer);
});

longBreakBtn.addEventListener("click", () => {
  m = 15;
  minut = 15;
  s = 00;
  min.innerText = "15";
  sec.innerText = "00";
  startBtn.disabled = false;
  refreshBtn.disabled = false;
  clearInterval(timer);
});

refreshBtn.addEventListener("click", () => {
  clearInterval(timer);
  sec.innerText = "00";
  min.innerText = minut;
  m = minut;
  s = 0;
});

let timer;

const timeToString = (n) => (n < 10 ? "0" + n : n);

const start = () => {
  timer = setInterval(() => {
    s--;
    if (s === -1) {
      m--;
      s = 59;
    }

    if (m === -1) {
      m = minut;
    }
    min.innerHTML = timeToString(m);
    sec.innerHTML = timeToString(s);

    title.innerHTML = `${timeToString(m)} : ${timeToString(s)}`;
  }, 1000);
};

startBtn.addEventListener("click", () => start());

pauseBtn.addEventListener("click", () => clearInterval(timer));
