// Major Elements selectors
const body = document.querySelector("body");

// toggle the hamburger icons to closed and opened
const navMobile = document.querySelector(".nav-mobile");
function myFunction(x) {
  x.classList.toggle("change");
  navMobile.classList.toggle("open");
  body.classList.toggle("overflow-y-hidden");
}

// Link Tree Opener
function treeDown(x) {
  x.firstElementChild.classList.toggle("opened");
  x.nextElementSibling.classList.toggle("tree-down");
}
