const themes = document.querySelector(".themes");
const body = document.querySelector("body");
const inputs = themes.querySelectorAll(".check");

themes.addEventListener("change", (e) => {
  body.classList.toggle(e.target.value);
});
