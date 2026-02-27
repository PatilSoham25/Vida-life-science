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
// ---------------------------------------------------
/* Scroll Reveal Animation */
const elements = document.querySelectorAll(".fade-up-direc");

function revealOnScroll(){
  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach(el=>{
    const boxTop = el.getBoundingClientRect().top;

    if(boxTop < triggerBottom){
      el.classList.add("show-direc");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
// ----------------------------------------------

const fadeElement = document.querySelector(".fade-in-govern");

function revealOnScrollG(){
  const triggerBottom = window.innerHeight * 0.85;
  const top = fadeElement.getBoundingClientRect().top;

  if(top < triggerBottom){
    fadeElement.classList.add("show-govern");
  }
}

window.addEventListener("scroll", revealOnScrollG);
window.addEventListener("load", revealOnScrollG);
// ----------------------------------------------------

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