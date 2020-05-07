const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}

const buttonAuth = document.querySelector(".button-auth");
const modalAuth = document.querySelector(".modal-auth");
const closeAuth = document.querySelector(".close-auth");
const logInForm = document.querySelector("#login");
const buttonLogin = document.querySelector(".button-login");
const buttonOut = document.querySelector(".button-out");
const userName = document.querySelector(".user-name");

let login = localStorage.getItem("Delivery");

buttonAuth.addEventListener("click", toggleModalAuth);
closeAuth.addEventListener("click",toggleModalAuth );

function toggleModalAuth() {
  modalAuth.classList.toggle("is-open");
  logInForm.style.border = "";
}


function auth() {
  if (login) {
    log();
  }
}

function log() {
  userName.style.display = "inline";
  userName.innerHTML = login;
  buttonAuth.style.display = "none";
  buttonOut.style.display = "flex";
}

function authorization() {
  login = logInForm.value;
  localStorage.setItem("Delivery", login);
  event.preventDefault();
  if (login) {
    modalAuth.classList.toggle("is-open");
    log();
  }else {
    logInForm.style.border = "2px solid red";
  }
}

function noAuthorization() {
  login = "";
  localStorage.setItem("Delivery", login);
  buttonAuth.style.display = "";
  buttonOut.style.display = "";
  userName.style.display = "";
}


auth();
buttonOut.addEventListener("click", noAuthorization);
buttonLogin.addEventListener("click", authorization);