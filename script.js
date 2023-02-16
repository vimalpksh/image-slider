const nextEl = document.querySelector(".next");
const imageContEl = document.querySelector(".image-container");
const imgsEl = document.querySelectorAll("img");
const prevEl = document.querySelector(".prev");

let currentImg = 1;

const updateImg = function () {
  if (currentImg > imgsEl.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imgsEl.length;
  }
  imageContEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;

  setTimeout(() => {
    currentImg++;
    updateImg();
  }, 3000);
};

nextEl.addEventListener("click", () => {
  currentImg++;
  updateImg();
});

prevEl.addEventListener("click", () => {
  currentImg--;
  updateImg();
});

updateImg();
