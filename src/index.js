const liveClockView = document.querySelector("#live-clock");

const userDisplayer = document.querySelector("#user-displayer");

const loginDialogMask = document.querySelector("#login-dialog-mask");
const userLoginButton = document.querySelector(
  '#login-dialog input[type="button"]'
);

let isLoggedIn = false;
let userName = "";

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

const userDisplayerClickHandler = function () {
  if (isLoggedIn) {
    // if (confirm("로그아웃 하시겠습니까?")) {
    //   // localstorage 지우기
    // }
  } else {
    loginDialogMask.classList.remove("hidden");
  }
};

const userLoginButtonClickHandler = function () {
  const userId = document.querySelector(
    '#login-dialog input[type="text"]'
  ).value;

  if (userId == "" || userId == null) {
    alert("ID를 입력해주세요.");
  } else {
    // login하고

    // login dialog 숨기기
    loginDialogMask.classList.add("hidden");
  }
};

userDisplayer.addEventListener("click", userDisplayerClickHandler);
userLoginButton.addEventListener("click", userLoginButtonClickHandler);

refreshLiveClock();
