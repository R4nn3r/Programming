// toggle the hamburger icons to closed and opend
function myFunction(x) {
  x.classList.toggle("change");
}

// Open The drop down list and change the arrow icon
function openTree(elem) {
  elem.firstElementChild.classList.toggle("up");
  elem.nextElementSibling.classList.toggle("treeDown");
}
