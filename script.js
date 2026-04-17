const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");
const navLinks = document.querySelectorAll(".main-nav a");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
    });
  });
}

const contactBtn = document.getElementById("contactBtn");
const contactMessage = document.getElementById("contactMessage");

if (contactBtn && contactMessage) {
  contactBtn.addEventListener("click", () => {
    contactMessage.classList.toggle("hidden");

    if (contactMessage.classList.contains("hidden")) {
      contactBtn.textContent = "Afficher un message";
    } else {
      contactBtn.textContent = "Masquer le message";
    }
  });
}

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.88;

  revealElements.forEach((element) => {
    const rect = element.getBoundingClientRect();

    if (rect.top < triggerBottom) {
      element.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);