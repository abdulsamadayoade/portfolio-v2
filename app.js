// NAV HAMBURGR MENU
const navIcon = document.querySelector('.nav-icon');
const navMain = document.querySelector('.nav-main');

navIcon.addEventListener('click', function () {

    if (this.classList.contains('nav-anim')) {
        this.classList.remove('nav-anim');
        navMain.classList.remove('moveIn');
    } else {
        this.classList.add('nav-anim');
        navMain.classList.add('moveIn');
    }
});