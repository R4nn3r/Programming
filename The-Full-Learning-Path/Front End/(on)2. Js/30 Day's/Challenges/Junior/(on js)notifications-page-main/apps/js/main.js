// Theme Changer
const checkBox = document.querySelector("#checkbox");
const body = document.querySelector("body");

const theme = ["light", "brown", "dark"];

checkBox.addEventListener("change", (e) => {
  let val = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
  body.className = theme[val];
  console.log(val);
});
