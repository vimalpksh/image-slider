const nextEl = document.querySelector(".next");
const imageContEl = document.querySelector(".image-container");
const imgsEl = document.querySelectorAll("img");
const prevEl = document.querySelector(".prev");

let timeOut;

let currentImg = 1;

const updateImg = function () {
  if (currentImg > imgsEl.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imgsEl.length;
  }
  imageContEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;

  timeOut = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 3000);
};

nextEl.addEventListener("click", () => {
  currentImg++;
  clearTimeout(timeOut);
  updateImg();
});

prevEl.addEventListener("click", () => {
  currentImg--;
  clearTimeout(timeOut);
  updateImg();
});

updateImg();
