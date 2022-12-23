const body = document.querySelector("body");
const navMobile = document.querySelector(".box");
function myFunction(x) {
  x.classList.toggle("change");
  navMobile.classList.toggle("open");
  body.classList.toggle("overflow-y-hidden");
}
