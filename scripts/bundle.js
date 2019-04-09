(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const beerImages = document.querySelectorAll('.beer__image');
const introTop = document.querySelector('.intro');

const nav = document.querySelector('nav');

// const beerTop = document.querySelector('.beers').offsetTop;
// const aboutTop = document.querySelector('.about').offsetTop;
// const hours = document.querySelector('.hours').offsetTop;

window.addEventListener('scroll', (e) => {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  const bottomScrollPosition = scrollPosition + window.innerHeight;
  beerImages.forEach(image => {
    const middle = image.offsetTop + (image.clientHeight / 2);
    bottomScrollPosition >= middle ? image.classList.add('slide-effect') : image.classList.remove("slide-effect");
  });

  scrollPosition > 0 ? nav.classList.add('nav-colored') : nav.classList.remove('nav-colored');
});

},{}],2:[function(require,module,exports){
const logo = document.querySelector('.hero__logo');
const tagline = document.querySelector('.hero__tagline');

window.onload = () => {
  logo.classList.add("slide-in");
  tagline.classList.add('slide-in');
};

},{}],3:[function(require,module,exports){
const heroSlideIn = require("./heroSlideIn");
const beerSlideIn = require("./beerSlideIn");

const smoothScroll = require("./smoothScroll");
const mobileNavSlide = require("./mobileNav");

},{"./beerSlideIn":1,"./heroSlideIn":2,"./mobileNav":4,"./smoothScroll":5}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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

},{"./mobileNav":4}]},{},[3]);
