const removeMobileNav = require("./mobileNav");

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link =>
  link.addEventListener("click", e => {
    e.preventDefault();
    const data = e.target.dataset.link;
    removeMobileNav(); // if user clicks contact link on overlay nav menu, then overlay should be removed

    // select element to scroll to by using data-link value and querySelector to find element by class in DOM
    const scrolledToElement = document.querySelector(`.${data}`);

    // find desired element to scroll to, offset value, to scroll to top of that element
    const offSetVal = scrolledToElement.offsetTop || 0;

    window.scrollTo({ top: offSetVal, behavior: "smooth" });
  })
);
