//toggle class active

const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#menu').
onclick = () => {
    navbarNav.classList.toggle('active')
};

//klik di luar untuk menghilangkan navbar

const hamburger = document.querySelector('#menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
});
