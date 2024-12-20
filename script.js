// Login Form Submission
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Simple validation (You can add more logic here)
    if (username === "admin" && password === "admin123") {
      document.getElementById("loginMessage").textContent = "Login successful!";
      document.getElementById("loginMessage").style.color = "green";
    } else {
      document.getElementById("loginMessage").textContent = "Invalid credentials!";
      document.getElementById("loginMessage").style.color = "red";
    }
  });
  