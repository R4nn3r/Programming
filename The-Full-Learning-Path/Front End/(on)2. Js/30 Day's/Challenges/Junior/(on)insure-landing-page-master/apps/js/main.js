const body = document.querySelector("body");

// Hamburger Menu Switch
const HamClick = (ham) => {
  ham.firstElementChild.classList.toggle("active");
  ham.lastElementChild.classList.toggle("active");
  ham.nextElementSibling.classList.toggle("active");
  body.classList.toggle("overflow-paused");
};

function theme() {
  body.classList.toggle("dark-theme");
}
