// Major Elements selectors
const body = document.querySelector("body");

// toggle the hamburger icons to closed and opened
const navMobile = document.querySelector(".nav-mobile");
function myFunction(x) {
  x.classList.toggle("change");
  navMobile.classList.toggle("open");
  body.classList.toggle("overflow-y-hidden");
}

// Open The drop down list and change the arrow icon
function openTree(elem) {
  elem.firstElementChild.classList.toggle("up");
  elem.nextElementSibling.classList.toggle("treeDown");
}
