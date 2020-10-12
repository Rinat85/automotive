require("../css/_style.css");

let hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function (e) {
  let menu = document.querySelector(".mobile-nav");

  if (hamburger.classList.contains("is-active")) {
    menu.style.right = "-100%";
  } else {
    menu.style.right = 0;
  }
  hamburger.classList.toggle("is-active");
});
