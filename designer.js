// designer.js

// -------- Check Login on Page Load --------
window.onload = function () {
  if (!localStorage.getItem("isLoggedIn")) {
    alert("⚠️ Please login first!");
    window.location.href = "login.html"; // redirect if not logged in
  }
};

// -------- Send OTP --------
const otpBtn = document.querySelector(".otp-btn");
if (otpBtn) {
  otpBtn.addEventListener("click", () => {
    const phoneNumber = document.getElementById("number").value.trim();

    if (!phoneNumber) {
      alert("⚠️ Please enter your phone number before requesting OTP!");
      return;
    }

    // In real app: send OTP via backend here
    alert("📩 OTP sent to your number: " + phoneNumber);
    localStorage.setItem("otpSent", "true");
  });
}

// -------- Verify & Save Profile --------
const profileForm = document.getElementById("profileForm");
if (profileForm) {
  profileForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!localStorage.getItem("otpSent")) {
      alert("⚠️ Please request OTP first!");
      return;
    }

    // Collect form data
    const name = document.getElementById("name").value.trim();
    const address = document.getElementById("address").value.trim();
    const dob = document.getElementById("dob").value;
    const number = document.getElementById("number").value.trim();
    const otp = document.getElementById("otp").value.trim();

    if (!name || !address || !dob || !number || !otp) {
      alert("⚠️ Please fill in all fields!");
      return;
    }

    // Simulate OTP check (real app: verify from backend)
    if (otp !== "1234") {
      alert("❌ Invalid OTP. Please try again.");
      return;
    }

    // Save verification flag
    localStorage.setItem("profileVerified", "true");
    localStorage.setItem("designerName", name);

    alert("✅ Profile verified successfully!");
    window.location.href = "designer admin.html"; // redirect to admin page
  });
}
