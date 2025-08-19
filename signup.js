// signup.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullName = form.querySelector("input[type='text']").value.trim();
    const email = form.querySelector("input[type='email']").value.trim();
    const password = form.querySelectorAll("input[type='password']")[0].value;
    const confirmPassword = form.querySelectorAll("input[type='password']")[1].value;
    if (!fullName || !email || !password || !confirmPassword) {
      alert("⚠️ Please fill in all fields!");
      return;
    }

    if (password !== confirmPassword) {
      alert("❌ Passwords do not match!");
      return;
    }

    // Store user data (⚠️ In real apps, NEVER store plain passwords like this!)
    const user = { fullName, email, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("✅ Account created successfully! Please log in.");
    window.location.href = "login.html"; // redirect to login
  });
});
