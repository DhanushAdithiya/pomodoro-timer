const btnStart = document.querySelector(".start");
const btnPause = document.querySelector(".pause");
const timer = document.querySelector(".time");

let timeCountDown;
let totalTime;
let time;
let repeat = 0;

function clearAll() {}

function updateCounddown() {
  const mintues = Math.floor(time / 60);
  let seconds = Math.trunc(time % 60);

  seconds = seconds < 10 ? "0" + seconds : seconds;

  timer.innerHTML = `${mintues}:${seconds}`;
  time--;

  if (time == -1 && repeat == 0) {
    clearInterval(timeCountDown);
    totalTime = 0.1;
    time = totalTime * 60;
    //setInterval(updateCounddown, 1000);
    timeCountDown = setInterval(updateCounddown, 1000);
    repeat = 1;
  } else if (time == -1 && repeat == 1) {
    timer.innerHTML = "";
    console.log("timer stopped");
    clearInterval(timeCountDown);
  }
}

btnStart.addEventListener("click", function () {
  repeat = 0;
  totalTime = 0.1;
  time = totalTime * 60;
  clearInterval(timeCountDown);
  timeCountDown = setInterval(updateCounddown, 1000);
});

// btnPause.addEventListener("click", function () {
//   console.log("pres");
//   btnPause.classList.remove("pause");
//   btnPause.classList.add("resume");
//   btnPause.innerHTML = "Resume";

//   let currentTime = timer.innerHTML;
//   const timeArr = currentTime.split(":");
//   const currentMinutes = timeArr[0];
//   const currentSeconds = timeArr[1];

//   clearInterval(timeCountDown);
//   timer.innerHTML = `${currentMinutes}:${currentSeconds}`;
// });

const updateBtn = function () {
  let currentTime = timer.innerHTML;
  let timeArr = currentTime.split(":");
  let currentMinutes = parseInt(timeArr[0]);
  let currentSeconds = parseInt(timeArr[1]);

  if (btnPause.innerHTML == "Pause") {
    btnPause.innerHTML = "Resume";

    clearInterval(timeCountDown);
    timer.innerHTML = `${currentMinutes}:${currentSeconds}`;
  } else if (btnPause.innerHTML == "Resume") {
    btnPause.innerHTML = "Pause";
    currentSeconds = currentSeconds / 60;

    totalTime = currentMinutes + currentSeconds;
    time = totalTime * 60;

    timeCountDown = setInterval(updateCounddown, 1000);
  }
};

btnPause.addEventListener("click", function () {
  updateBtn();
});
