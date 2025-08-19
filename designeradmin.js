// designeradmin.js

document.addEventListener("DOMContentLoaded", () => {
  const balanceCard = document.querySelector(".balance-card h3");
  const withdrawBtn = document.querySelector(".withdraw-btn");
  const amountInput = document.getElementById("amount");

  // -------- Check login & profile verification --------
  if (!localStorage.getItem("isLoggedIn") || !localStorage.getItem("profileVerified")) {
    alert("⚠️ Access denied. Please log in and verify your profile first.");
    window.location.href = "login.html";
    return;
  }

  // -------- Load balance from storage --------
  let balance = parseInt(localStorage.getItem("designerBalance")) || 24750;
  updateBalance();

  function updateBalance() {
    balanceCard.textContent = `₹ ${balance.toLocaleString()}`;
    localStorage.setItem("designerBalance", balance);
  }

  // -------- Withdraw logic --------
  withdrawBtn.addEventListener("click", () => {
    const amount = parseInt(amountInput.value);

    if (!amount || amount <= 0) {
      alert("⚠️ Please enter a valid withdrawal amount.");
      return;
    }

    if (amount > balance) {
      alert("❌ Insufficient balance. Try a smaller amount.");
      return;
    }

    balance -= amount;
    updateBalance();
    amountInput.value = "";

    alert(`✅ Withdrawal of ₹${amount} successful! Remaining balance: ₹${balance.toLocaleString()}`);
  });

  // -------- Logout --------
  const logoutLink = document.querySelector("a[href='login.html']");
  if (logoutLink) {
    logoutLink.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("profileVerified");
      alert("👋 Logged out successfully.");
      window.location.href = "login.html";
    });
  }
});
