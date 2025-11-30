// Mobile Menu Toggle
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

// Smooth Scrolling
document.querySelectorAll(".nav-item").forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
        navLinks.classList.remove("open");
    });
});

// Fade-in About Section on Scroll
const aboutSection = document.querySelector(".about-section");

window.addEventListener("scroll", () => {
    const sectionTop = aboutSection.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 100;

    if(sectionTop < triggerPoint){
        aboutSection.classList.add("show");
    }
});

// Highlight Active Nav Link
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-item");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(sec => {
        const secTop = sec.offsetTop - 150;
        if(window.scrollY >= secTop){
            current = sec.getAttribute("id");
        }
    });

    navItems.forEach(item => {
        item.classList.remove("active");
        if(item.getAttribute("href") === "#" + current){
            item.style.color = "#FFD700";
        } else {
            item.style.color = "white";
        }
    });
});
// Add click animation for the cards
document.querySelectorAll(".skill-card").forEach(card => {
  card.addEventListener("click", () => {
    card.style.transform = "scale(0.95)";
    setTimeout(() => {
      card.style.transform = "";
    }, 150);
  });
});

// certificate.js

// Create a mapping of card IDs to their info
const certificates = {
  "python-card": {
    title: "Python Programming",
    platform: "NPTEL",
    img: "Portfolio 1/python.jpg"
  },
  "cloud-card": {
    title: "Cloud Computing",
    platform: "NPTEL",
    img: "Portfolio 1/cloud.jpg"
  },
  "ml-card": {
    title: "Machine Learning",
    platform: "NPTEL",
    img: "Portfolio 1/ml.jpg"
  },
  "htmlcss-card": {
    title: "HTML & CSS",
    platform: "PrepInsta",
    img: "Portfolio 1/html.jpg"
  },
  "javascript-card": {
    title: "JavaScript",
    platform: "PrepInsta",
    img: "Portfolio 1/javascript.jpg"
  }
};

// Add event listeners
for (let id in certificates) {
  const card = document.getElementById(id);
  card.addEventListener("click", () => {
    const data = certificates[id];
    openModal(data.title, data.platform, data.img);
  });
}

// Modal functions
function openModal(title, platform, imgPath) {
  document.getElementById('modal-title').innerText = title;
  document.getElementById('modal-platform').innerText = "Platform: " + platform;
  const img = document.getElementById('modal-image');
  img.src = imgPath;
  img.style.display = 'block';
  document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

