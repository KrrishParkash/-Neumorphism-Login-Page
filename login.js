let password = document.getElementById("password");
let togglePassword = document.getElementById("toggle-password");

togglePassword.onclick = function () {
  if (password.type === "password") {
    password.type = "text";
    togglePassword.src = "./visible.png";
  } else {
    password.type = "password";
    togglePassword.src = "./hide.png";
  }
};
