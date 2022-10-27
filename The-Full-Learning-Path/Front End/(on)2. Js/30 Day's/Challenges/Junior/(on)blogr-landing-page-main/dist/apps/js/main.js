// Major Elements selectors
const body = document.querySelector("body");
const check = document.querySelectorAll(".check");

// toggle the hamburger icons to closed and opened
const navMobile = document.querySelector(".nav-menu");
function myFunction(x) {
  x.classList.toggle("change");
  navMobile.classList.toggle("open");
  body.classList.toggle("overflow-y-hidden");
}

// Link Tree Opener
function treeDown(x) {
  x.firstElementChild.classList.toggle("opened");
  check[0].classList.toggle("tree-down");
}
function treeDown_(x) {
  x.firstElementChild.classList.toggle("opened");
  check[1].classList.toggle("tree-down");
}
