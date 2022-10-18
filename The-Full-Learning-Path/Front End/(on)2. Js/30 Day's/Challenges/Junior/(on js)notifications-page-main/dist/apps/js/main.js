// Theme Changer
const checkBox = document.querySelector("#checkbox");
const root = document.querySelector("html");

checkBox.addEventListener("change", (e) => {
  root.classList.toggle("light");
});
