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

// .............
let categoryLink = document.querySelectorAll(".button_click");

for (i = 0; i < categoryLink.length; i++) {
  let clicked = categoryLink[i];
  clicked.addEventListener("click", function () {
    categoryLink = document.querySelectorAll(".button_click");
    for (i = 0; i < categoryLink.length; i++) {
      categoryLink[i].classList.remove("button_click_active");
    }

    this.classList.add("button_click_active");
  });
}

let object = {
  address: [
    {
      title: ["3D Mockup Design", "2D Mockup Design"],
      span: ["9 MONTS AGO", "2 MONTS AGO"],
      img: ["images/work_and_presentation.jpg ", "images/work_logo.jpeg"],
    },
    {
      title: ["3D Mockup Design", "2D Mockup Design"],
      span: ["9 MONTS AGO", "2 MONTS AGO"],
      img: ["images/design_logo.jpg", "images/work_logo.jpeg"],
    },
    {
      title: ["3D Mockup Design"],
      span: ["9 MONTS AGO"],
      img: ["images/icon_mockup.jpg"],
    },
    {
      title: ["3D Mockup Design"],
      span: ["9 MONTS AGO"],
      img: ["images/psd_image.jpg"],
    },
  ],
};

const cateGoryid = document.querySelectorAll(".button_click");

cateGoryid.forEach((box) => {
  box.addEventListener("click", function handleClick(event) {
    let dataattribute = box.getAttribute("data");

    if (typeof object["address"][dataattribute] !== "undefined") {
      const dD = Object.keys(object["address"][dataattribute]["title"])
        .map(function (key) {
          //
          return (
            '<div class="moreimg_img"><img src="' +
            object["address"][dataattribute]["img"][key] +
            '" alt="image" /><div class="moreimg_info"><div class="moreimg_center"><img src="images/heart.svg" alt="hearticon" /><span>' +
            object["address"][dataattribute]["span"][key] +
            " </span><h1> " +
            object["address"][dataattribute]["title"][key] +
            " </h1></div></div></div>"
          );
        })
        .join("");

      document.querySelector("#moreimg").innerHTML = dD;
    }
  });
});

const allItem = document.querySelector(".all");

allItem.addEventListener("click", function handleClick(event) {
  document.querySelector("#moreimg").innerHTML = "";
  object.address.forEach((score, index, array) => {
    const Leng = score.title.length;
    console.log(Leng);
    for (let i = 0; i < Leng; i++) {
      document.querySelector("#moreimg").innerHTML +=
        '<div class="moreimg_img"><img src="' +
        score.img[i] +
        '" alt="image" /><div class="moreimg_info"><div class="moreimg_center"><img src="images/heart.svg" alt="hearticon" /><span>' +
        score.span[i] +
        "</span><h1> " +
        score.title[i] +
        "</h1></div></div></div>";
    }
  });
});

object.address.forEach((score, index, array) => {
  const Leng = score.title.length;
  console.log(Leng);
  for (let i = 0; i < Leng; i++) {
    document.querySelector("#moreimg").innerHTML +=
      '<div class="moreimg_img"><img src="' +
      score.img[i] +
      '" alt="image" /><div class="moreimg_info"><div class="moreimg_center"><img src="images/heart.svg" alt="hearticon" /><span>' +
      score.span[i] +
      "</span><h1> " +
      score.title[i] +
      "</h1></div></div></div>";
  }
});
