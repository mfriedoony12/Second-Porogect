const navBtn = document.querySelector(".nav__btn")
const navMenu = document.querySelector(".nav-menu")
const icon = document.querySelectorAll(".place__like-icon");
let navOpen = false;
navBtn.addEventListener("click", function () {
    if (navOpen) {
        navBtn.classList.remove("nav__btn--open")
        navMenu.classList.remove("nav-menu--open")
        navOpen = false
    } else {
        navBtn.classList.add("nav__btn--open")
        navMenu.classList.add("nav-menu--open")
        navOpen = true
    }
})
    icon.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle('place__like-icon--fill');
    });
});
