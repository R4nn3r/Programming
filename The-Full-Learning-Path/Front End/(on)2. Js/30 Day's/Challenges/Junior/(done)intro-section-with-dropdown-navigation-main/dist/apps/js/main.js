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

// random colors
const theme = [
  "yellow-theme",
  "purple-theme",
  "dark-theme",
  "light-theme",
  "blue-theme",
];

function random() {
  body.className = theme[getRand()];
}

var getRand = (function () {
  var nums = [0, 1, 2, 3, 4];
  var current = [];
  function rand(n) {
    return (Math.random() * n) | 0;
  }
  return function () {
    if (!current.length) current = nums.slice();
    return current.splice(rand(current.length), 1);
  };
})();
