
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

const form = document.querySelector("form"),
  emailField = form.querySelector(".email"),
  emailInput = emailField.querySelector("input"),
  passField = form.querySelector(".password"),
  passInput = passField.querySelector("input"),
  cPassField = form.querySelector(".cPassword"),
  cPassInput = cPassField.querySelector("input");

const emailError = emailField.querySelector(".error-message"),
  passError = passField.querySelector(".error-message"),
  cPassError = cPassField.querySelector(".error-message");

// Email Validtion
function checkEmail() {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emailPattern)) {
    emailField.classList.add("invalid");
    emailError.innerText = "Por favor, insira um e-mail válido.";
  } else {
    emailField.classList.remove("invalid");
    emailError.innerText = "";
  }
}

// Password Validation
function createPass() {
  const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!passInput.value.match(passPattern)) {
    passField.classList.add("invalid");
    passError.innerText = "A senha deve ter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais.";
  } else {
    passField.classList.remove("invalid");
    passError.innerText = "";
  }
}

// Confirm Password Validtion
function confirmPass() {
  if (passInput.value !== cPassInput.value || cPassInput.value === "") {
    cPassField.classList.add("invalid");
    cPassError.innerText = "As senhas não coincidem.";
  } else {
    cPassField.classList.remove("invalid");
    cPassError.innerText = "";
  }
}

// Calling Function on Form Submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkEmail();
  createPass();
  confirmPass();

  emailInput.addEventListener("keyup", checkEmail);
  passInput.addEventListener("keyup", createPass);
  cPassInput.addEventListener("keyup", confirmPass);

  if (
    !emailField.classList.contains("invalid") &&
    !passField.classList.contains("invalid") &&
    !cPassField.classList.contains("invalid")
  ) {
    location.href = form.getAttribute("action");
  }
});
