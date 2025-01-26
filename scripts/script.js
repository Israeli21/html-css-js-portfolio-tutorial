function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.querySelector('a[href="#profile"]').addEventListener("click", (e) => {
  e.preventDefault(); // Prevent the default anchor behavior
  window.scrollTo({
    top: 0, // Scroll to the top of the page
    behavior: "smooth", // Smooth scrolling animation
  });
});

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

var typed = new Typed(".auto-type-a", {
  strings: ["Hi! I'm"],
  typeSpeed: 25,
  loop: false,
  showCursor: false
  ,startDelay: 2500
});

var typed2 = new Typed(".auto-type-b", {
  strings: ["Junior Computer Science Student"],
  typeSpeed: 25,
  loop: false,
  showCursor: false
  ,startDelay: 2500
});

var typed3 = new Typed(".auto-type-1", {
  strings: ["Israel Trejo"],
  typeSpeed: 50,
  loop: false,
  showCursor: false
  ,startDelay: 2500
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


createObserver(".auto-type-2", "About Me");
createObserver(".auto-type-3", "Experience");
createObserver(".auto-type-4", "Projects");
createObserver(".auto-type-5", "Contact Me");
