// Header

const menuIcon = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const clsoeIcon = document.querySelector(".menu__close");
const body = document.querySelector("body");

menuIcon.addEventListener("click", function () {
  menu.classList.add("--active");
  body.classList.add("--active");
});

clsoeIcon.addEventListener("click", function () {
  menu.classList.remove("--active");
  body.classList.remove("--active");
});

// / Header
