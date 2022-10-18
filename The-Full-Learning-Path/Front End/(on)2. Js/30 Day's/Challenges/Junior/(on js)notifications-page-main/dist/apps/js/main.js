// Theme Changer
const checkBox = document.querySelector("#checkbox");
const body = document.querySelector("body");

const theme = ["light", "brown", "dark"];

checkBox.addEventListener("change", (e) => {
  body.className = theme[getRand()];
});

var getRand = (function () {
  var nums = [0, 1, 2];
  var current = [];
  function rand(n) {
    return (Math.random() * n) | 0;
  }
  return function () {
    if (!current.length) current = nums.slice();
    return current.splice(rand(current.length), 1);
  };
})();
