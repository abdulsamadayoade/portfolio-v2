// NAV HAMBURGR MENU
const navIcon = document.querySelector('.nav--icon');
const navSecond = document.querySelector('.nav--second');

navIcon.addEventListener('click', function () {

    if (this.classList.contains('nav--anim')) {
        this.classList.remove('nav--anim');
        navSecond.classList.remove('showIn');
    } else {
        this.classList.add('nav--anim');
        navSecond.classList.add('showIn');
    }
});

// CLOSE THE NAV WHEN THE NAV LINKS ARE GETTING CLICKED
const project = document.getElementById('pro');

project.addEventListener('click', function () {
    navSecond.classList.remove('showIn');
    navIcon.classList.remove('nav--anim');
});