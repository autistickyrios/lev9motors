document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navbar = document.querySelector(".navbar");

  hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
});
window.addEventListener("load", () => {
  document.getElementById("loading").style.display = "none"; // Hide the loader after content is fully loaded
});
