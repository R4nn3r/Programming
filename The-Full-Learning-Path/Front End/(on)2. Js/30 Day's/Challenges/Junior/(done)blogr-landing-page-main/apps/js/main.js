// Creating local storage
const colorTheme = document.querySelectorAll("[name='theme']");

//  Store
const storeTheme = function (theme) {
  localStorage.setItem("theme", theme);
};

colorTheme.forEach((themeOption) => {
  themeOption.addEventListener("click", () => {
    storeTheme(themeOption.id);
  });
});

// Load it every time page is rendered
const savedTheme = localStorage.getItem("theme");

colorTheme.forEach((themeOption) => {
  if (themeOption.id == savedTheme) {
    themeOption.checked = true;
  }
});
