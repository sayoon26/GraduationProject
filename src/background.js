const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const setRandomBackground = function () {
  const index = Math.floor(Math.random() * images.length);

  document.body.style.backgroundImage = `url(img/${images[index]})`;
};

setRandomBackground();
