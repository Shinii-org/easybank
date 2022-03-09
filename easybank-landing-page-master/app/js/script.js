const headerBtn = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const hiddenMenu = document.querySelector(".header__mobile--menu");
const body = document.querySelector("body");

headerBtn.addEventListener("click", function (e) {
  const btn = e.target.closest(".header__menu");
  if (!btn) return;
  btn.classList.toggle("open");
  overlay.classList.toggle("hidden");
  hiddenMenu.classList.toggle("hidden");
  body.classList.toggle("blockScroll");
});
overlay.addEventListener("click", function () {
  const btn = document.querySelector(".header__menu");
  overlay.classList.add("hidden");
  hiddenMenu.classList.add("hidden");
  btn.classList.remove("open");
  body.classList.remove("blockScroll");
});
