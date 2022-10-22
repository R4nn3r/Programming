// Selectors
const body = document.querySelector("body");

// Theme Picker
const type = document.querySelector(".themeType");
const checkBox = document.querySelector("#checkbox");

checkBox.addEventListener("change", () => {
  if (checkBox.checked) {
    body.className = "light-theme";
    type.innerHTML = "Light Mode";
  } else {
    body.className = "dark-theme";
    type.innerHTML = "Dark Mode";
  }
});

const random = document.querySelector(".random");

console.log(random);

const theme = ["rainbow-theme", "blue-theme", "dark-theme", "light-theme"];

random.addEventListener("click", (e) => {
  body.className = theme[getRand()];
  type.innerHTML = "Random Mode";
});

var getRand = (function () {
  var nums = [0, 1, 2, 3];
  var current = [];
  function rand(n) {
    return (Math.random() * n) | 0;
  }
  return function () {
    if (!current.length) current = nums.slice();
    return current.splice(rand(current.length), 1);
  };
})();
