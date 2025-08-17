// const slides = document.querySelectorAll(".slide");
// let count = 0;

// const changeSlide = () => {
//   slides[count].classList.remove("active");
//   count = (count + 1) % slides.length;
//   slides[count].classList.add("active");
// };

// setInterval(changeSlide, 4000);

// // ================= color picker start ==============

// document.querySelector(".pickerBtn").onclick = () => {
//   document.querySelector(".colorSwitcher").classList.toggle("active");
// };

// let themeBtns = document.querySelectorAll(".theme-btns");

// themeBtns.forEach((color) => {
//   color.addEventListener("click", () => {
//     let dataColor = color.getAttribute("data-color");
//     document
//       .querySelector(":root")
//       .style.setProperty("--main-color", dataColor);
//   });
// });

// ================= color picker end ==============

document.querySelector("#hello").innerHTML = "hello i am anil";
