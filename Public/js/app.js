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
let counters = document.querySelectorAll(".stat-box h3");
let statsStarted = false;

window.addEventListener("scroll", () => {
  let statsSection = document.querySelector(".stats");
  let position = statsSection.getBoundingClientRect().top;
  let screenHeight = window.innerHeight;

  if (position < screenHeight && !statsStarted) {
    counters.forEach(counter => {
      let target = +counter.dataset.count;
      let count = 0;

      let increment = target / 100;

      let updateCount = () => {
        if (count < target) {
          count += increment;
          counter.innerText = Math.ceil(count);
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });

    statsStarted = true;
  }
});

//////////////////////////
let filters = document.querySelectorAll(".menu-filters li");
let items = document.querySelectorAll(".menu-item");

filters.forEach(filter => {
  filter.addEventListener("click", () => {

    filters.forEach(f => f.classList.remove("active"));
    filter.classList.add("active");

    let category = filter.dataset.filter;

    items.forEach(item => {
      if (item.classList.contains(category)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

window.addEventListener("load", () => {
  filters[0].classList.add("active");
  filters[0].click();
});

