let currentSlide = 0;

function changeSlide(direction) {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = totalSlides - 3; 
  } else if (currentSlide >= totalSlides - 2) {
    currentSlide = 0; 
  }

  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(-${currentSlide * 33.33}%)`;
}
