const liveClockView = document.querySelector("#live-clock");

const refreshLiveClock = function () {
  const currentDateTime = new Date();

  const year = currentDateTime.getFullYear();
  const month = currentDateTime.getMonth();
  const day = currentDateTime.getDay();

  const hour = currentDateTime.getHours();
  const minute = currentDateTime.getMinutes();
  const second = currentDateTime.getSeconds();

  liveClockView.innerHTML = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
};

refreshLiveClock();
