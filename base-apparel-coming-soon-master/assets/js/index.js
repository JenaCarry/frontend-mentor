window.onload = init;

function init() {
  const btn = document.querySelector(".btn");
  btn.onclick = handlerClick;
  const email = document.querySelector("#inputEmail");
  email.onkeypress = handleKeyPress;
}

function handlerClick() {
  const email = document.querySelector("#inputEmail");
  const status = document.querySelector(".status");
  const emailValue = email.value;
  if (emailValue === "" || !checkEmail(emailValue)) {
    email.parentNode.classList.remove("valid");
    email.parentNode.classList.add("invalid");
    status.innerHTML = "Please provide a valid email";
  } else if (checkEmail(emailValue)) {
    email.parentNode.classList.remove("invalid");
    email.parentNode.classList.add("valid");
    status.innerHTML = "Thanks to subscribing to our newsletter";
  }
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function handleKeyPress(e) {
  const btn = document.querySelector(".btn");
  if (e.keyCode === 13) {
    btn.click();
    return false;
  }
}

// document.addEventListener("keypress", (e) => {
//   if (e.key === "Enter") {
//     e.preventDefault();
//     const btn = document.querySelector(".btn");
//     btn.click();
//   }
// });

const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

document.addEventListener("keydown", (event) => {
  const email = document.querySelector("#inputEmail");
  if (event.key === "Backspace") {
    email.parentNode.classList.remove("invalid");
    email.parentNode.classList.remove("valid");
  }
});
