import "./style.css";
function toggleMenu() {
  var navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
}

// Close the navigation links when clicking outside the menu
window.onclick = function (event) {
  var navLinks = document.getElementById("navLinks");
  if (
    event.target != navLinks &&
    !event.target.classList.contains("hamburger-icon")
  ) {
    navLinks.classList.remove("show");
  }
};
