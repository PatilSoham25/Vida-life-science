const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

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

/*----------------------------- */
// FOUNDATION SECTION SCROLL ANIMATION

const foundationElements = document.querySelectorAll(
  ".reveal-up, .reveal-left, .reveal-img, .reveal-float"
);

const foundationObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.2 });

foundationElements.forEach(el => foundationObserver.observe(el));

/*----------------------------- */
/* Scroll Reveal Animation */
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.2 });

reveals.forEach(el => observer.observe(el));

/* Initialize Lucide Icons */
lucide.createIcons();

/*----------------------------- */
const steps = [
    {
        id:"01",
        title:"Collection & Sorting:",
        desc:"Used instruments are gathered, sorted, and transported to the CSSD dirty area.",
        icon:"waves",
        bg:"#eff6ff",
        color:"#2563eb",
        img:"/DWI/Projects/VidaFinal/public/step1.png"
    },
    {
        id:"02",
        title:"Pre-Disinfection:",
        desc:"Immediate rinsing prevents organic matter from drying on instruments.",
        icon:"zap",
        bg:"#fffbeb",
        color:"#f59e0b",
        img:"/DWI/Projects/VidaFinal/public/step2.png"
    },
    {
        id:"03",
        title:"Cleaning (Decontamination):",
        desc:"A) Manual Cleaning: Disassembly and brushing instruments in enzymatic/detergent solutions.B) Automated Cleaning: Using washer-disinfectors with ultrasonic cleaning to remove biofilms.C) Rinsing: Thorough rinsing with clean, treated water.",
        icon:"scan",
        bg:"#faf5ff",
        color:"#9333ea",
        img:"/DWI/Projects/VidaFinal/public/step3.png"
    },
    {
        id:"04",
        title:"Drying:",
        desc:"Instruments are dried using air systems to prevent corrosion.",
        icon:"thermometer",
        bg:"#fff1f2",
        color:"#e11d48",
        img:"/DWI/Projects/VidaFinal/public/step4.png"
    },
    {
        id:"05",
        title:"Inspection & Maintenance:",
        desc:"Checking for cleanliness, functionality (hinges, sharpness), damage, and applying lubricant if needed. Items failing inspection are rejected.",
        icon:"package-check",
        bg:"#ecfdf5",
        color:"#059669",
        img:"/DWI/Projects/VidaFinal/public/step5.png"
    },
    {
        id:"06",
        title:"Packaging:",
        desc:"Items are wrapped (often double-wrapped) in sterile barrier materials and labeled for traceability.",
        icon:"package-check",
        bg:"#ecfdf5",
        color:"#059669",
        img:"/DWI/Projects/VidaFinal/public/step6.png"
    },
    {
        id:"07",
        title:"Sterilization:",
        desc:"Using methods like saturated steam (autoclave), ethylene oxide (ETO), or hydrogen peroxide plasma to kill all microorganisms.",
        icon:"package-check",
        bg:"#ecfdf5",
        color:"#059669",
        img:"/DWI/Projects/VidaFinal/public/step7.png"
    },
    {
        id:"08",
        title:"Sterile Storage:",
        desc:"Storing packaged, sterile items in designated clean areas until needed, maintaining sterility.",
        icon:"package-check",
        bg:"#ecfdf5",
        color:"#059669",
        img:"/DWI/Projects/VidaFinal/public/step8.png"
    },
    {
        id:"09",
        title:"Distribution:",
        desc:"Delivering sterile supplies to operating rooms and other departments for patient care.",
        icon:"package-check",
        bg:"#ecfdf5",
        color:"#059669",
        img:"/DWI/Projects/VidaFinal/public/step9.png"
    }
];

const slidesContainer = document.getElementById("slides");
let current = 0;
let interval;
let paused = false;

/* Create Slides */
steps.forEach((step) => {
  const slide = document.createElement("div");
  slide.classList.add("slide");

  slide.innerHTML = `
    <img src="${step.img}" />
    <div class="slide-content">
      <div class="big-number">${step.id}</div>
      <div class="icon-box">📦</div>
      <h3>${step.title}</h3>
      <p>${step.desc}</p>
      <div class="progress">
        <div class="progress-bar"></div>
      </div>
    </div>
  `;

  slidesContainer.appendChild(slide);
});

const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach(s => s.classList.remove("active"));
  current = index;
  slides[current].classList.add("active");

  const bar = slides[current].querySelector(".progress-bar");
  bar.style.width = "0%";
  setTimeout(() => {
    bar.style.width = "100%";
  }, 50);
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

document.getElementById("next").onclick = nextSlide;
document.getElementById("prev").onclick = prevSlide;

document.getElementById("pause").onclick = function () {
  paused = !paused;
  this.innerHTML = paused ? "▶" : "❚❚";
  if (paused) clearInterval(interval);
  else autoPlay();
};

function autoPlay() {
  interval = setInterval(nextSlide, 5000);
}

showSlide(0);
autoPlay();

/*---------------------------- */
// Locations
const locations = [
  { id: 1, name: "Pune (HQ)", lat: 18.5204, lng: 73.8567, color: "#ef4444", size: 1.5 },
  { id: 2, name: "South Africa", lat: -30.5595, lng: 22.9375, color: "#3b82f6", size: 0.8 },
  { id: 3, name: "Bhutan", lat: 27.5142, lng: 90.4336, color: "#3b82f6", size: 0.8 },
  { id: 4, name: "Delhi", lat: 28.7041, lng: 77.1025, color: "#06b6d4", size: 0.5 }
];

// ⭐ Generate stars
const starsContainer = document.getElementById("stars");
for (let i = 0; i < 80; i++) {
  const star = document.createElement("div");
  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";
  star.style.width = star.style.height = Math.random() * 3 + "px";
  star.style.opacity = Math.random();
  starsContainer.appendChild(star);
}

// Create arcs from HQ
const hq = locations[0];
const arcsData = locations.slice(1).map(loc => ({
  startLat: hq.lat,
  startLng: hq.lng,
  endLat: loc.lat,
  endLng: loc.lng,
  color: ['rgba(59,130,246,0.5)', 'rgba(6,182,212,0.8)']
}));

// Globe Init
const globe = Globe()
  (document.getElementById('globeViz'))
  .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
  .backgroundColor('rgba(0,0,0,0)')
  .atmosphereColor('#bae6fd')
  .atmosphereAltitude(0.15)

  // Labels
  .labelsData(locations)
  .labelLat(d => d.lat)
  .labelLng(d => d.lng)
  .labelText(d => d.name)
  .labelColor(d => d.color)
  .labelDotRadius(d => d.size)
  .labelAltitude(0.01)

  // Arcs
  .arcsData(arcsData)
  .arcColor('color')
  .arcDashLength(0.4)
  .arcDashGap(0.6)
  .arcDashAnimateTime(2000)

  // Rings
  .ringsData(locations)
  .ringColor(() => t => `rgba(255,255,255,${1-t})`)
  .ringMaxRadius(d => d.id === 1 ? 6 : 3)
  .ringPropagationSpeed(2)
  .ringRepeatPeriod(800);

// Auto rotate
globe.controls().autoRotate = true;
globe.controls().autoRotateSpeed = 1.2;

// Initial POV
globe.pointOfView({ lat: 22, lng: 70, altitude: 2.2 });

/*------------------------------- */
// Scroll Animation
const observer1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      animateCounter(entry.target.querySelector(".statNum-number"));
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll(".statNum").forEach(stat => {
  observer1.observe(stat);
});

// Counter Animation
function animateCounter(el) {
  const target = +el.getAttribute("data-target");
  const suffix = el.getAttribute("data-suffix");
  let count = 0;
  const speed = target / 100;

  const update = () => {
    count += speed;
    if (count < target) {
      el.textContent = Math.floor(count) + suffix;
      requestAnimationFrame(update);
    } else {
      el.textContent = target + suffix;
    }
  };

  update();
}
/*----------------------------------- */

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