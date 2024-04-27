const menu = document.getElementById('menu');
const menuToggleElemnt = document.querySelector('.menu-toggle');
const menuToggle = (e) =>{
    const srcImg = e.target.getAttribute('src');

    srcImg === './images/icon-hamburger.svg'
    ?
    (e.target.setAttribute('src', './images/icon-close.svg'),
    menuToggleElemnt.style.left = '50%')
    :
    (e.target.setAttribute('src', './images/icon-hamburger.svg'),
    menuToggleElemnt.style.left = '-100%'
)
}   

menu.addEventListener('click', menuToggle);