function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Hide navbar when scrolling past the home section
window.addEventListener('scroll', () => {
    const desktopNav = document.querySelector('#desktop-nav');
    const hamburgerNav = document.querySelector('#hamburger-nav');
    const homeSection = document.querySelector('#home');
    const homeBottom = homeSection.getBoundingClientRect().bottom;

    if (homeBottom <= 0) {
        desktopNav.classList.add('hidden');
        hamburgerNav.classList.add('hidden');
    } else {
        desktopNav.classList.remove('hidden');
        hamburgerNav.classList.remove('hidden');
    }
});