const loginButtonPopup = document.querySelector("#login-button-popup");
const loginSignupContainer = document.querySelector("#login-signup-container");
const loginLink = document.querySelector("#login-link");
const signupLink = document.querySelector("#signup-link");
const closeButton = document.querySelector("#close");
const headerNav = document.querySelector("#header-nav");
const menu = document.querySelector("#menu");

loginButtonPopup.addEventListener("click", (event) => {
  if (!loginSignupContainer.classList.contains("active")) {
    loginSignupContainer.classList.add("active");
  }

  if (menu.classList.contains("active")) {
    headerNav.classList.remove("active");
    menu.classList.remove("active");
  }
});

loginLink.addEventListener("click", (event) => {
  if (loginSignupContainer.classList.contains("signup")) {
    loginSignupContainer.classList.remove("signup");
  }
});

signupLink.addEventListener("click", (event) => {
  if (!loginSignupContainer.classList.contains("signup")) {
    loginSignupContainer.classList.add("signup");
  }
});

closeButton.addEventListener("click", (event) => {
  if (loginSignupContainer.classList.contains("active")) {
    loginSignupContainer.classList.remove("active");
  }
});

menu.addEventListener("click", (event) => {
  menu.classList.toggle("active");
  headerNav.classList.toggle("active");
});
