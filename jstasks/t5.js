document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(String(email).toLowerCase());
};

const isValidsite = (website) => {
  const urlRegex =
    /^(https?|ftp):\/\/(([a-z\d]([a-z\d-]*[a-z\d])?\.)+[a-z]{2,}|localhost)(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i;
  return urlRegex.test(String(website));
};

function validateInputs() {
  const name = document.getElementById("name");
  const email = document.getElementById("mail");
  const website = document.getElementById("site");
  const message = document.getElementById("msg");
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const websiteValue = website.value.trim();
  const messageValue = message.value.trim();

  if (nameValue === "") {
    setError(name, "This field is required");
  } else {
    setSuccess(name);
  }

  if (emailValue === "") {
    setError(email, "This field is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "A valid email is required");
  } else {
    setSuccess(email);
  }

  if (websiteValue === "") {
    setError(website, "This field is required");
  } else if (!isValidsite(websiteValue)) {
    setError(website, "A valid URL is required");
  } else {
    setSuccess(website);
  }

  if (messageValue === "") {
    setError(message, "This field is required");
  } else {
    setSuccess(message);
  }
}
