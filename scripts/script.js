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

var typed = new Typed(".auto-type-1", {
  strings: ["Israel Trejo"],
  typeSpeed: 75,
  loop: false,
  showCursor: false
});

function createObserver(selector, strings) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          new Typed(selector, {
            strings: [strings],
            typeSpeed: 50,
            loop: false,
            showCursor: false
          });
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 } // Trigger when 50% of the element is visible
  );

  observer.observe(document.querySelector(selector));
}

// Create observers for different elements
createObserver(".auto-type-2", "About Me");
createObserver(".auto-type-3", "Experience");
createObserver(".auto-type-4", "Projects");
createObserver(".auto-type-5", "Contact Me");
