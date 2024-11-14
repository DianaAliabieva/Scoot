
const menuToggle = document.querySelector('#burgerButton');
const showcase = document.querySelector('#mobileMenu');
// const headContainer = document.querySelector('.head');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
  // headContainer.classList.toggle('menu-open');
})

