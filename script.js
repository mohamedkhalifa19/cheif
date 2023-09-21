let menu = document.getElementById("menu-icon");
let navbar = document.querySelector(".navbar");
let darkMode = document.getElementById("dark-mode");
menu.addEventListener("click", () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
});
window.addEventListener("scroll", () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("open");
});

darkMode.addEventListener("click", () => {
  if (darkMode.classList.contains("bx-moon")) {
    darkMode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("dark");
  } else {
    darkMode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("dark");
  }
});
