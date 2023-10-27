const menu = document.querySelector('#menu-bars');
const navbar = document.querySelector('.navbar');

console.log(menu);
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
