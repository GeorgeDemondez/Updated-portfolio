let angle = 0;
const carousel = document.querySelector('.carousel3d');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

nextBtn.addEventListener('click', () => {
  angle -= 90;
  carousel.style.transform = `rotateY(${angle}deg)`;
});

prevBtn.addEventListener('click', () => {
  angle += 90;
  carousel.style.transform = `rotateY(${angle}deg)`;
});