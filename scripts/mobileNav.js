const menuIcon = document.querySelectorAll(".nav-menu");
const mobileNav = document.querySelector(".mobileNav");

function mobileNavSlide() {
  mobileNav.classList.toggle("slideIn");
}

function removeMobileNav() {
  mobileNav.classList.remove("slideIn");
}

menuIcon.forEach(icon => icon.addEventListener("click", mobileNavSlide));

module.exports = removeMobileNav;
