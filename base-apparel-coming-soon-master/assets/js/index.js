window.onload = init;

function init() {
  const btn = document.querySelector(".btn");
  btn.onclick = handlerClick;
  const email = document.querySelector("#inputEmail");
  email.onkeypress = handleKeyPress;
}

function handlerClick(eventObj) {
  const email = document.querySelector("#inputEmail");
  const emailValue = email.value;
  if (emailValue === "" || !checkEmail(emailValue)) {
    email.parentNode.classList.add("invalid");
  } else if (checkEmail(emailValue)) {
    email.parentNode.classList.remove("invalid");
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

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
