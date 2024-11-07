document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".banner-left--wrapper", {
    scrollTrigger: {
      trigger: ".banner-left--wrapper",
      scrub: true,
      start: "top bottom",
      end: "top top",
    },
    scaleX: 0,
    transformOrigin: "top center",
    ease: "none",
  });
});

const square = document.querySelector("#my-story");
square.addEventListener("click", () => {
  const state = Flip.getState(square);
  square.classList.toggle("full-screen");
  Flip.from(state);
});

const tl = gsap.timeline();

tl.from(".banner-sub", 1.8, {
  y: -50,
  ease: "power4.out",
  delay: 0,
  skewY: 5,
  stagger: {
    amount: 0.3,
  },
});
