// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 3,
//   centeredSlides: true,
//   spaceBetween: 30,
//   pagination: {
//     el: ".swiper-pagination",
//     type: "fraction",
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

// var appendNumber = 4;
// var prependNumber = 1;
// document
//   .querySelector(".prepend-2-slides")
//   .addEventListener("click", function (e) {
//     e.preventDefault();
//     swiper.prependSlide([
//       '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
//       '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
//     ]);
//   });
// document
//   .querySelector(".prepend-slide")
//   .addEventListener("click", function (e) {
//     e.preventDefault();
//     swiper.prependSlide(
//       '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
//     );
//   });
// document.querySelector(".append-slide").addEventListener("click", function (e) {
//   e.preventDefault();
//   swiper.appendSlide(
//     '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
//   );
// });
// document
//   .querySelector(".append-2-slides")
//   .addEventListener("click", function (e) {
//     e.preventDefault();
//     swiper.appendSlide([
//       '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
//       '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
//     ]);
//   });

var swiper = new Swiper(".swiper-project", {
  slidesPerView: 1,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function find(n, L, start, end) {
  var i = start;
  while (i <= end) {
    if (n == L[i]) {
      return i;
    }
    i = i + 1;
  }
  return -1;
}

function find(n, L, start, end) {
  var i = end - start;
  var i = start + length / 2;
  if (start > end) {
    return -1;
  } else if (start == end) {
    if (n == L[i]) {
      return i;
    } else {
      return -1;
    }
  } else if (n == L[i]) {
    return i;
  } else if (n > L[i]) {
    return find(n, L, i + 1, end);
  } else {
    return find(n, L, start);
  }
}
