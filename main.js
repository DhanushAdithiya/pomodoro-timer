const btnStart = document.querySelector(".start");
const btnPause = document.querySelector(".pause");
const timer = document.querySelector(".time");

let timeCountDown;
const totalTime = 10;
let time = totalTime * 60;

btnStart.addEventListener("click", function () {
  timeCountDown = setInterval(updateCounddown, 1000);

  function updateCounddown() {
    const mintues = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;

    timer.innerHTML = `${mintues}:${seconds}`;
    time--;
  }
});

btnPause.addEventListener("click", function () {
  console.log("pres");
  btnPause.classList.remove("pause");
  btnPause.classList.add("resume");
  btnPause.innerHTML = "Resume";

  let currentTime = timer.innerHTML;
  const timeArr = currentTime.split(":");
  const currentMinutes = timeArr[0];
  const currentSeconds = timeArr[1];

  clearInterval(timeCountDown);
  timer.innerHTML = `${currentMinutes}:${currentSeconds}`;
});
