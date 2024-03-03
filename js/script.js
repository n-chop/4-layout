const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');
const headerContainer = document.querySelector('.header__container');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('open');
    menu.classList.toggle('open');
    headerContainer.classList.toggle('open');
});
menu.addEventListener('click', () => {
    burgerMenu.classList.remove('open');
    menu.classList.remove('open');
    headerContainer.classList.remove('open');
});


