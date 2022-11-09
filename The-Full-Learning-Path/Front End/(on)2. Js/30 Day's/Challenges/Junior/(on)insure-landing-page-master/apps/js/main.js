// Hamburger Menu Switch
const HamClick = (ham) => {
  ham.firstElementChild.classList.toggle("active");
  ham.lastElementChild.classList.toggle("active");
  ham.nextElementSibling.classList.toggle("active");
};

const body = document.querySelector("body");
function theme() {
  body.classList.toggle("dark-theme");
}
