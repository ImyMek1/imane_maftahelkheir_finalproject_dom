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

//////////////////////////
let track = document.querySelector(".slider-track");
let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let index = 0;

function goToSlide(i) {
  track.style.transform = `translateX(-${i * 100}%)`;

  dots.forEach(d => d.classList.remove("active"));
  dots[i].classList.add("active");
}

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    goToSlide(index);
  });
});

setInterval(() => {
  index = (index + 1) % slides.length;
  goToSlide(index);
}, 5000);

///////////////////////////////////
// let track_Ev = document.querySelector(".events-track");
// let cards = document.querySelectorAll(".event-card");

// let indexev = 0;

// function slideEvents() {
//   let cardWidth = cards[0].offsetWidth + 30;
//   indexev++;

//   track_Ev.style.transform = `translateX(-${indexev * cardWidth}px)`;

//   if (indexev >= cards.length - 3) {
//     setTimeout(() => {
//       track_Ev.style.transition = "none";
//       index = 0;
//       track_Ev.style.transform = "translateX(0)";
//     }, 700);

//     setTimeout(() => {
//       track_Ev.style.transition = "transform 0.6s ease";
//     }, 750);
//   }
// }

// setInterval(slideEvents, 4000);


//////////////////////////////////

let modal = document.getElementById("modal");
let closeModal = document.getElementById("closeModal");
let form = document.getElementById("bookingForm");
let message = document.getElementById("message");
let openButtons = document.querySelectorAll(".open-book-modal");

let bookings = [];

openButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let booking = {
    name: document.getElementById("fullName").value,
    meal: document.getElementById("meal").value,
    date: document.getElementById("date").value,
    startTime: document.getElementById("startTime").value,
    endTime: document.getElementById("endTime").value,
    people: document.getElementById("people").value
  };

  let conflict = bookings.find(b => 
    b.date === booking.date &&
    b.meal === booking.meal &&
    !(booking.endTime <= b.startTime || booking.startTime >= b.endTime)
  );

  if (conflict) {
    message.style.color = "red";
    message.innerText = "This time slot is already booked.";
  } else {
    bookings.push(booking);
    message.style.color = "green";
    message.innerText = "Booking confirmed!";

    form.reset();
    setTimeout(() => {
      modal.style.display = "none";
      message.innerText = "";
    }, 1500);
  }
});
