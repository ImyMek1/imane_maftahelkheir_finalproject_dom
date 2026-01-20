let burger = document.querySelector(".burger");
 navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

window.addEventListener("load", () => {
  document.querySelector(".hero-text").classList.add("show");
});

///////////////////

///////////////////
let whySection = document.querySelector(".why-us");

window.addEventListener("scroll", () => {
  let pos = whySection.getBoundingClientRect().top;
  let screen = window.innerHeight;

  if (pos < screen - 150) {
    whySection.classList.add("show");
  }
});

///////////////////
