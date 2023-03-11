const navbarBtn = document.querySelector('#arrow-btn');
const navbar = document.querySelector('.nav-links');
const arrowIcon = document.querySelector('.arrow');

navbarBtn.addEventListener('click', (e) => {
  arrowIcon.classList.toggle('active');
  navbar.classList.toggle('active');
});
