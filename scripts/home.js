// images js

let currentSlide = 0;
const images = document.querySelectorAll('.slider-img');

function showNextSlide() {
  images[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % images.length;
  images[currentSlide].classList.add('active');
}

setInterval(showNextSlide, 1000);


// text js

const words = ["Art", "Gallery", "Website"];
let index = 0;

function changeWord() {
  const animatedText = document.getElementById("animated-text");
  animatedText.textContent = words[index];
  index = (index + 1) % words.length;
}

setInterval(changeWord, 2000);









