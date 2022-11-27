hamMenu = (e) => {
  e.firstElementChild.classList.toggle("close");
  e.lastElementChild.classList.toggle("open");
};

const hidden = document.querySelector(".hidden");
const body = document.querySelector("body");
function myFunction(x) {
  x.classList.toggle("change");
  hidden.classList.toggle("visible");
  body.classList.toggle("overflow");
}
