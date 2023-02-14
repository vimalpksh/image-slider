const nextEl = document.querySelector(".next");
const imageContEl = document.querySelector(".image-container");
const imgsEl = document.querySelectorAll("img");

let currentImg = 1;

nextEl.addEventListener("click", () => {
  currentImg++;
  updateImg();
});

const updateImg = function () {
  imageContEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
};
