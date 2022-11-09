// Hamburger Menu Switch
const HamClick = (ham) => {
  ham.firstElementChild.classList.toggle("active");
  ham.lastElementChild.classList.toggle("active");
  ham.nextElementSibling.classList.toggle("active");
};
