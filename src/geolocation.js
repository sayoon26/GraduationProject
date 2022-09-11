const weatherView = document.querySelector("#weather");

const apiKey = "514a21a53a1c6cb85a002352e5cfb9d9";

const geolocationOK = function (position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  weatherView.textContent = "날씨 정보 가져오는 중...";

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=kr`
  ).then(function (response) {
    response.json().then(function (data) {
      weatherView.textContent = `${data.name} ${data.sys.country} / ${data.main.temp}℃ ${data.weather[0].description}`;
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
