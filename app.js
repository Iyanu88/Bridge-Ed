const API_URL = "http://localhost:5000/api/auth";

// SIGNUP
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
      name: signupForm.name.value,
      emailOrPhone: signupForm.emailOrPhone.value,
      password: signupForm.password.value,
    };

    const res = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    document.getElementById("signupMessage").textContent = data.msg;

    if (data.msg === "Registration successful!") {
      setTimeout(() => (window.location.href = "login.html"), 1500);
    }
  });
}

// LOGIN
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
      emailOrPhone: loginForm.emailOrPhone.value,
      password: loginForm.password.value,
    };

    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    document.getElementById("loginMessage").textContent = data.msg;

    if (data.token) {
      localStorage.setItem("bridgeed-user", JSON.stringify(data.user));
      window.location.href = "dashboard.html";
    }
  });
}
