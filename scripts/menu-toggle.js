const logo = document.getElementById('logo');
const navLinks = document.querySelector('.nav-links');

logo.addEventListener('click', () => {
    navLinks.classList.toggle('show-links');
});
