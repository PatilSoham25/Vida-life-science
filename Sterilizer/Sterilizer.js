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
// -------------------------------------------
window.addEventListener("load", () => {
  const content = document.querySelector(".content-sterilizer");

  setTimeout(() => {
    content.style.opacity = "1";
    content.style.transform = "translateY(0)";
  }, 200);
});
// -------------------------------------------
const accordions = document.querySelectorAll(".accordion-sterilizer-li");

accordions.forEach(acc => {
  acc.addEventListener("click", function(){

    this.classList.toggle("active-sterilizer-li ");

    const panel = this.nextElementSibling;

    if(panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }

  });
});
// -------------------------------------------------
// Fade in on scroll
function revealCTA(){
  const section = document.querySelector(".cta-section-tech");
  const sectionTop = section.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if(sectionTop < windowHeight - 100){
    section.style.opacity = "1";
    section.style.transform = "translateY(0)";
  }
}

window.addEventListener("scroll", revealCTA);
window.addEventListener("load", revealCTA);
// --------------------------------------------------
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