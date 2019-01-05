let menuButton = document.querySelector('.menu__button');
let menuWrap = document.querySelector('.menu-wrap');

menuButton.addEventListener('click', () => {
    // console.log('clicked');
    toggleMenu();
    clearInterval(toggleTimer);
})

let toggleMenu = () => {
    menuWrap.classList.toggle('open')

}
let toggleTimer = setInterval(() => {
    toggleMenu();
}, 2000);