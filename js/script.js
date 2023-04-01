let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("myslides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 5000);
}

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  const htmlSpan = document.querySelector(".htmlspan");
  const cssSpan = document.querySelector(".cssspan");
  const jsSpan = document.querySelector(".jsspan");
  const bootstrapSpan = document.querySelector(".bootstrapspan");

  if (document.documentElement.scrollTop > 200) {
    htmlSpan.classList.add("precent100");
    cssSpan.classList.add("precent90");
    jsSpan.classList.add("parent80");
    bootstrapSpan.classList.add("parent85");
  } else {
    htmlSpan.classList.remove("precent100");
    cssSpan.classList.remove("precent90");
    jsSpan.classList.remove("parent80");
    bootstrapSpan.classList.remove("parent85");
  }
}

const swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  allowTouchMove: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});