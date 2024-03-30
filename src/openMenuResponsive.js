const btnOpenMenu = document.querySelector(".btnOpenMenu");
const menu = document.querySelector('.menu');

btnOpenMenu.addEventListener('click', () => {
    menu.classList.toggle('hidden');
})