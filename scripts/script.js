function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const buttonRight = document.getElementById('slideRight');
const buttonLeft = document.getElementById('slideLeft');
const container = document.querySelector('.projects-scroll-container');
const projectContainerWidth = container.querySelector('.project-container').offsetWidth;

buttonRight.onclick = function () {
  container.scrollLeft += projectContainerWidth + 16; // Adjust for the gap if any
};

buttonLeft.onclick = function () {
  container.scrollLeft -= projectContainerWidth + 16; // Adjust for the gap if any
};

var typed = new Typed(".auto-type", {
  startDelay: 2000,
  strings: ["Israel Trejo"],
  typeSpeed: 200,
  loop: false
});