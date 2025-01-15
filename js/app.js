const mobMenuBtn = document.querySelector(".nav-btn-mobile");
const menu = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-links>li");
const logo = document.querySelector(".logo");

mobMenuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    mobMenuBtn.classList.toggle("is-open");
});


logo.addEventListener("click", () => {
    menu.classList.remove("active");
    mobMenuBtn.classList.remove("is-open");
});

document.addEventListener('DOMContentLoaded', function () {
    const anchors = document.querySelectorAll('.nav-links>li a[href^="#"]');
    anchors.forEach(function (anchor) {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            menu.classList.remove("active");
            mobMenuBtn.classList.remove("is-open");
            const target = anchor.getAttribute('href').substring(1);
            smoothScroll(target);
        });
    });
});

function smoothScroll(target) {
    const element = document.getElementById(target);
    if (element) {
        window.scrollTo({
            top: element.offsetTop - 100,
            behavior: 'smooth'
        });
    }
}

const year = new Date().getFullYear();
document.querySelector(".year-copyright").textContent = year;