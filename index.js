const slides = document.querySelectorAll(".slide");
let count = 0;

const changeSlide = () => {
  slides[count].classList.remove("active");
  count = (count + 1) % slides.length;
  slides[count].classList.add("active");
};

setInterval(changeSlide, 4000);
