const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenuNav");

/* Scroll Effect */
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* Mobile Toggle */
menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");

  if (mobileMenu.classList.contains("active")) {
    menuToggle.innerHTML = "✖";
  } else {
    menuToggle.innerHTML = "☰";
  }
});

const container = document.getElementById("videoContainer");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      container.classList.add("show");
    }
  });
}, { threshold: 0.3 });

observer.observe(container);

// -------------------------------------

// Scroll Reveal
const reveals = document.querySelectorAll(".reveal-RC");

const observerRC = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active-RC");
    }
  });
}, { threshold: 0.3 });

reveals.forEach(el => observerRC.observe(el));


// Counter Animation
const counters = document.querySelectorAll(".number-RC");

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      const counter = entry.target;
      const target = +counter.getAttribute("data-count");
      let count = 0;
      const speed = 20;

      const update = () => {
        if (count < target) {
          count++;
          counter.innerText = count + (target === 300 ? "+" : "%");
          setTimeout(update, speed);
        }
      };

      update();
      counterObserver.unobserve(counter);
    }
  });
}, { threshold: 0.5 });

counters.forEach(counter => counterObserver.observe(counter));

const revealElement = document.querySelector(".reveal-working");

const observerWorking = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active-working");
    }
  });
}, { threshold: 0.3 });

observerWorking.observe(revealElement);

lucide.createIcons();
// -------------------------------------------------------
// Dynamic Year
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll Animation
const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{ threshold:0.2 });

document.querySelectorAll(".fade-up").forEach(el=>{
  observer2.observe(el);
});