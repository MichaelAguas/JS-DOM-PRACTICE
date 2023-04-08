const navEmail = document.querySelector(".navbar-email")
const deskMenu = document.querySelector(".desktop-menu")
const mobMenu = document.querySelector(".mobile-menu")
const hamIcoMenu = document.querySelector(".menu")

navEmail.addEventListener("click", toggleDesktopMenu) 
hamIcoMenu.addEventListener("click", toggleMobileMenu)

function toggleDesktopMenu() { 
    deskMenu.classList.toggle("inactive")
}

function toggleMobileMenu() { 
    mobMenu.classList.toggle("inactive")
}