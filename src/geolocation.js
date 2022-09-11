const weatherView = document.querySelector("#weather");

const apiKey = "514a21a53a1c6cb85a002352e5cfb9d9";

const geolocationOK = function (position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
  ).then(function (response) {
    response.json().then(function (data) {
      // API 호출 정상적으로 되면 나중에 다시 보자
    });
  });
};

const geolocationError = function (error) {
  weatherView.textContent = "위치 정보를 가져올 수 없습니다.";
};

const getGeolocation = function () {
  weatherView.textContent = "위치 정보 가져오는 중...";
  navigator.geolocation.getCurrentPosition(geolocationOK, geolocationError);
};

getGeolocation();
