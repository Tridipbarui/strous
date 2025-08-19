
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

const header = document.querySelector(".site-header");
if (header) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

const newsletterForm = document.querySelector(".newsletter-form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const emailInput = this.querySelector("input[type='email']");
    const email = emailInput.value.trim();
    const message = document.createElement("p");
    message.classList.add("form-message");

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    this.querySelectorAll(".form-message").forEach(m => m.remove());

    if (!emailPattern.test(email)) {
      message.textContent = "Please enter a valid email address.";
      message.style.color = "red";
    } else {
      message.textContent = "Thank you for subscribing!";
      message.style.color = "green";
      emailInput.value = "";
    }
    this.appendChild(message);
  });
}

const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    navToggle.classList.toggle("active");
  });
}
