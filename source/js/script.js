const mainHeader = document.querySelector('.main-header');
const navButton = document.querySelector('.nav-button');

mainHeader.classList.remove('no-js');

navButton.addEventListener('click', () => mainHeader.classList.toggle('is-nav-open'));
