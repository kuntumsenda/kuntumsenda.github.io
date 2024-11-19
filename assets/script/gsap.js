gsap.registerPlugin(ScrollTrigger);
gsap.to(".top-nav", {
  x: "0",
  scrollTrigger: ".section-home",
  duration: 0.5,
});
gsap.to("#my-info-1", {
  y: "0",
  scrollTrigger: ".section-home",
  duration: 0.5,
});
gsap.to(".banner-left--wrapper", {
  y: "0",
});
gsap.to(".container-about", {
  y: "0",
  scrollTrigger: ".container-about",
  duration: 1,
});
gsap.to("#list-projects", {
  y: "0",
  scrollTrigger: "#list-projects",
  duration: 1,
});

const line1 = document.querySelector("#line-1");
let line1Width = line1.offsetWidth - 60;
let amountToScrollLine1 = line1Width - window.innerWidth;
const tween = gsap.to(line1, {
  x: -amountToScrollLine1,
  duration: 3,
  ease: "none",
});
ScrollTrigger.create({
  trigger: ".line-skill--wrapper",
  start: "bottom 40%",
  end: "100px",
  pin: true,
  animation: tween,
  scrub: 1,
  markers: false,
});
