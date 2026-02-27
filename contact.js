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
// -----------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector(".hero-content-contact");
  content.style.opacity = "0";
  content.style.transform = "translateY(40px)";
  content.style.transition = "all 1s ease";

  setTimeout(() => {
    content.style.opacity = "1";
    content.style.transform = "translateY(0)";
  }, 200);
});
// ------------------------------------------
// Simple form submit example
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Message Sent Successfully!");
  this.reset();
});

// ------------------------------------------

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