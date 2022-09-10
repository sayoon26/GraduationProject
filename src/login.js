const userDisplayer = document.querySelector("#user-displayer");

const loginDialogMask = document.querySelector("#login-dialog-mask");
const userLoginButton = document.querySelector(
  '#login-dialog input[type="button"]'
);

let isLoggedIn = false;
let currentUserId = "";

const getLoggedUser = function () {
  const userId = localStorage.getItem("userId");

  if (userId != null && userId != undefined) {
    isLoggedIn = true;
    currentUserId = userId;
  } else {
    isLoggedIn = false;
    currentUserId = "";
  }

  renderUserDisplayer();
};

const renderUserDisplayer = function () {
  if (isLoggedIn) {
    userDisplayer.textContent = currentUserId;
  } else {
    userDisplayer.textContent = "로그인";
  }
};

const userDisplayerClickHandler = function () {
  if (isLoggedIn) {
    if (confirm("로그아웃 하시겠습니까?")) {
      // localstorage 지우기
      window.localStorage.removeItem("userId");

      getLoggedUser();
    }
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
    window.localStorage.setItem("userId", userId);

    // login dialog 숨기기
    loginDialogMask.classList.add("hidden");

    getLoggedUser();
  }
};

userDisplayer.addEventListener("click", userDisplayerClickHandler);
userLoginButton.addEventListener("click", userLoginButtonClickHandler);

getLoggedUser();
