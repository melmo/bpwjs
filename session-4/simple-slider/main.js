var currentLeft = 0;
var minLeft = -200;
var slider = document.getElementById('slider');

function nextSlide() {
  if (currentLeft > minLeft) {
    currentLeft = currentLeft - 100;
    slider.style.left = currentLeft + '%';
  }
}

function prevSlide() {
  if (currentLeft < 0) {
    currentLeft = currentLeft + 100;
    slider.style.left = currentLeft + '%';
  }
}