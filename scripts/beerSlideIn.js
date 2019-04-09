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
