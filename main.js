const navbarBtn = document.querySelector('#arrow-btn');
const navbar = document.querySelector('.nav-links');
const arrowIcon = document.querySelector('.arrow');

navbarBtn.addEventListener('click', () => {
  navbarBtn.classList.toggle('active');
  navbar.classList.toggle('active');
});
