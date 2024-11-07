
const menuToggle = document.querySelector('#burgerButton');
const showcase = document.querySelector('#navMenu');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})