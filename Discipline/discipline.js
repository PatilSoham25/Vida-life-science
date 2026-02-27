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

const items = document.querySelectorAll(".timeline-item");
const lineFill = document.querySelector(".line-fill");

function revealOnScrollH(){
  const triggerBottom = window.innerHeight * 0.85;

  items.forEach(item => {
    const top = item.getBoundingClientRect().top;

    if(top < triggerBottom){
      item.classList.add("show");
    }
  });

  updateLineFill();
}

function updateLineFill(){
  const timeline = document.querySelector(".timeline");
  const rect = timeline.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  let progress = ((windowHeight - rect.top) / rect.height) * 100;
  progress = Math.max(0, Math.min(100, progress));

  lineFill.style.height = progress + "%";
}

window.addEventListener("scroll", revealOnScrollH);
window.addEventListener("load", revealOnScrollH);

//----------------------------------------------

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