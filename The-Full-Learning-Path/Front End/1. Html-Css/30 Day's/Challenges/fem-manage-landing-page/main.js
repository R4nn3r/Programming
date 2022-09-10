const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

//  Create and event listener for a click
navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});
