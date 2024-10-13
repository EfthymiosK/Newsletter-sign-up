const subscribeButton = document.getElementById("subscribe-button");
const dismiss = document.getElementById("dismiss-button");
const signUp = document.querySelector(".mobile-component-container");
const success = document.querySelector(".mobile-success-component")
const form = document.querySelector("#newsletter-form");
const submittedEmail = document.querySelector("#submitted-email");




function isValidEntry(str) {
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return str.match(validRegex)
}

function showErrors() {
  const errorMsg = document.querySelector("#error-message");
  const input = document.querySelector("#user_email");
  errorMsg.classList.remove("hidden");
  input.classList.add("error");
}

function updateSuccessMessage(email) {
  submittedEmail.textContent = email;
}

function switchSections() {
  signUp.classList.toggle("hidden");
  success.classList.toggle("hidden");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = form.querySelector("#user_email");
  const valid = isValidEntry(email.value);
  if (!valid) {
    return showErrors();
  }
  if (valid) {
    updateSuccessMessage(email.value);
    switchSections();
  }
});

dismiss.addEventListener("click", () => {
  switchSections();
  updateSuccessMessage("");
});
