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

//search-bar

document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.getElementById("search");
    const searchBar = document.querySelector(".search-bar");
    const searchInput = document.getElementById("search-input");
    const navbarNav = document.querySelector(".navbar-nav");

    // Toggle animasi search bar saat ikon search diklik
    searchIcon.addEventListener("click", function (event) {
        event.preventDefault();
        searchBar.classList.toggle("active");
        searchInput.focus();

        // Sembunyikan navbar saat search bar aktif
        if (searchBar.classList.contains("active")) {
            navbarNav.classList.add("hidden");
        } else {
            navbarNav.classList.remove("hidden");
        }
    });

    // Saat klik di luar search bar, navbar muncul lagi
    document.addEventListener("click", function (e) {
        if (!searchBar.contains(e.target) && !searchIcon.contains(e.target)) {
            searchBar.classList.remove("active");
            navbarNav.classList.remove("hidden");
        }
    });
});

