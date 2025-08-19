// login.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop normal form submit

    const username = form.querySelector("input[type='text']").value.trim();
    const password = form.querySelector("input[type='password']").value.trim();

    if (!username || !password) {
      alert("⚠️ Please enter both username and password!");
      return;
    }

    // Simple demo login check (replace with backend check in real app)
    if (username === "admin" && password === "1234") {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("loggedInUser", username);
      alert("✅ Login successful! Welcome " + username);
      window.location.href = "prototype.html"; // redirect to main site
    } else {
      alert("❌ Invalid username or password.");
    }
  });
});
