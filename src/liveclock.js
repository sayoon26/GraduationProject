const liveClockView = document.querySelector("#live-clock");

const refreshLiveClock = function () {
  const currentDateTime = new Date();

  const year = currentDateTime.getFullYear();
  const month = currentDateTime.getMonth().toString().padStart(2, "0");
  const day = currentDateTime.getDay().toString().padStart(2, "0");

  const hour = currentDateTime.getHours().toString().padStart(2, "0");
  const minute = currentDateTime.getMinutes().toString().padStart(2, "0");
  const second = currentDateTime.getSeconds().toString().padStart(2, "0");

  liveClockView.innerHTML = `${year}-${month}-${day} ${hour}:${minute}:${second}`;

  setInterval(refreshLiveClock, 1000);
};

refreshLiveClock();
