const openMenuBtn = document.querySelector('#open');
const closeMenuBtn = document.querySelector('#close');
const navLinks = document.querySelector('#nav-links');

openMenuBtn.addEventListener('click', () => {
  navLinks.classList.add('show');
});

closeMenuBtn.addEventListener('click', () => {
  navLinks.classList.remove('show');
});
