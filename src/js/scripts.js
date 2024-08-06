const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close'),
overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});

overlay.addEventListener('click', () =>  {
    menu.classList.remove('active');
});

// Skills level progress bar
const progressCounters = document.querySelectorAll('.skills__level-percent'),
    lines = document.querySelectorAll('.skills__level-line span');

progressCounters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
})