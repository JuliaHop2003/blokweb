var menuButton = document.querySelector('header button');
menuButton.addEventListener('click', menuOpen);

var divOverlay = document.querySelector('header div');
divOverlay.addEventListener('click', menuOpen);

function menuOpen() {
    var menuNav = document.querySelector('header');
    menuNav.classList.toggle('menuOpen');
}