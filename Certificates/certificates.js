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
// -------------------------------------

const certificates = [
  { 
    img: "/DWI/Projects/VidaFInal/public/certificate1.jpeg", 
    title: "Manufacturing License", 
    sub: "Govt. of India" 
  },

  { 
    img: "/DWI/Projects/VidaFInal/public/certificate2.jpeg", 
    title: "ISO 13485:2016", 
    sub: "International Standards" 
  },

  { 
    img: "/DWI/Projects/VidaFInal/public/certificate3.jpeg", 
    title: "ISO 9001:2015", 
    sub: "International Standards" 
  },

  { 
    img: "/DWI/Projects/VidaFInal/public/certificate4.jpeg", 
    title: "WHO-GMP Certified", 
    sub: "Compliance Authority" 
  },

  { 
    img: "/DWI/Projects/VidaFInal/public/certificate5.jpeg", 
    title: "CE Conformity", 
    sub: "Compliance Authority" 
  }
];

const carouselCert = document.getElementById("carousel-cert");

certificates.concat(certificates).forEach(cert => {
  const card = document.createElement("div");
  card.className = "card-cert";

  card.innerHTML = `
    <img src="${cert.img}" alt="${cert.title}">
    <div class="card-overlay-cert">
      <h4>${cert.title}</h4>
      <p>${cert.sub}</p>
    </div>
  `;

  carouselCert.appendChild(card);
});

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