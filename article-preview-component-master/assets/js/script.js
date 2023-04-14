const active = document.querySelector(".profile-content");
const share = document.querySelector(".share-icon");

share.addEventListener("click", () => {
  if (active.classList.contains("active")) {
    active.classList.toggle("active");
  } else {
    active.classList.add("active");
  }
});
