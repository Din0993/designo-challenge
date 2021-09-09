"use strict";

const menuBtn = document.querySelector(".navigation__menu-btn");
const nav = document.querySelector(".navigation");
const menu = document.querySelector(".hamburger-menu-container");

menuBtn.addEventListener("click", function () {
  if (menuBtn.checked) {
    // nav.classList.add("navigation-active");
    menu.classList.add("hamburger-menu-container-active");
  } else {
    // nav.classList.remove("navigation-active");
    menu.classList.remove("hamburger-menu-container-active");
  }
});
