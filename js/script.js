// switch mode function

let body = document.body;
let navbar = document.getElementById("navbar");
let footer = document.getElementById("footer");
let darkMode = document.getElementById("darkMode");
let collegeIcon = document.getElementById("collegeIcon");

function switchMode(allMode) {
  // change color of navbar, footer, and body
  navbar.classList.toggle("dark");
  footer.classList.toggle("dark");
  body.classList.toggle("dark");

  // Ganti ikon dark/light
  const isDark = body.classList.contains("dark");
  darkMode.src = isDark
    ? "/img/light-mode-svgrepo-com.svg"
    : "/img/mode-dark-svgrepo-com.svg";
  darkMode.alt = isDark ? "light" : "dark";

  // ganti ikon webLink
  document.querySelectorAll(".webLink").forEach(function (switchWebLink) {
    switchWebLink.src = isDark
      ? "/img/web-link-white-svgrepo-com.svg"
      : "/img/web-link-svgrepo-com.svg";
  });

  // ganti ikon college
  collegeIcon.src = isDark
    ? "/img/college-svgrepo-com (white).svg"
    : "/img/college-svgrepo-com (birdonk).svg";
}
