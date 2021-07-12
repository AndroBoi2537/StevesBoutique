const Obj = [
  {
    img: "./images/img1.jpg",
    alt: "img1",
  },
  {
    img: "./images/img2.jpg",
    alt: "img2",
  },
  {
    img: "./images/img3.jpg",
    alt: "img3",
  },
];

const links = document.getElementsByTagName("a");
const con = document.getElementsByTagName("div")[1];
const con2 = document.getElementsByTagName("div")[2];
const img = document.querySelector(".image");
const btn1 = document.getElementsByTagName("button")[0];
const btn2 = document.getElementsByTagName("button")[1];

let slideIndex = 0;

window.addEventListener("DOMContentLoaded", () => {
  ImageSlideShow(slideIndex);
});

function ImageSlideShow(n) {
  const p = Obj[slideIndex];
  img.src = p.img;
}

btn1.addEventListener("click", () => {
  slideIndex++;
  if (slideIndex > Obj.length - 1) {
    slideIndex = 0;
  }
  ImageSlideShow(slideIndex);
});

btn2.addEventListener("click", () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = Obj.length - 1;
  }

  ImageSlideShow(slideIndex);
});

// for (let i = ; i < Obj.length; i++) {

// }

createObserver();

function createObserver() {
  let observer;
  let options = {
    root: con,
    rootMargin: "100px",
    threshold: 0.25,
  };

  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(con2);
}

function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isVisible == true) {
      console.log("true");
    }
  });
}
