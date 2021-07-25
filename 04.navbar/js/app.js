
// catch items
let mobileNav = document.querySelector(".mobile-nav");
let barIcon  = document.querySelector('.bar-icon');


// listeners
barIcon.addEventListener('click', () => {
    toggleNavbar();
});

// toggleNavbar function
function toggleNavbar(){
    mobileNav.classList.toggle('show-content')
}