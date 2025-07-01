function moveLeft(carouselId) {
  const carousel = document.getElementById(carouselId);
  carousel.scrollBy({
    left: -300,
    behavior: 'smooth'
  });
}

function moveRight(carouselId) {
  const carousel = document.getElementById(carouselId);
  carousel.scrollBy({
    left: 300,
    behavior: 'smooth'
  });
}