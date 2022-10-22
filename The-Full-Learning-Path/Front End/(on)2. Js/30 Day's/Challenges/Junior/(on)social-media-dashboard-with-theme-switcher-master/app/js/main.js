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
