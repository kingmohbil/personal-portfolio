const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});
const navbarBtn = document.querySelector('#arrow-btn');
const navbar = document.querySelector('.nav-links');
const arrowIcon = document.querySelector('.arrow');
const hiddenElements = document.querySelectorAll('.hidden');

navbarBtn.addEventListener('click', () => {
  navbarBtn.classList.toggle('active');
  navbar.classList.toggle('active');
});

hiddenElements.forEach((element) => observer.observe(element));
