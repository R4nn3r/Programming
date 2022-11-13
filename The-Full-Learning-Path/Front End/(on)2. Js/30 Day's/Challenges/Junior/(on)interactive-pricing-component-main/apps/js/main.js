const input = document.querySelector("#checkbox");
const price = document.querySelector(".price");
const view = document.querySelector(".view");
const minSlide = document.querySelector(".min-slide");

// input.addEventListener("checked", () => {
//   let value = parseInt(price.innerHTML);
//   price.innerHTML = `${value - value * 0.25}.00`;
// });
const value = price.innerHTML;
function check(input) {
  if (input.checked) {
    let newValue = parseInt(price.innerHTML);
    price.innerHTML = `${newValue - newValue * 0.25}.00`;
    minSlide.style.backgroundColor = " var(--slide-bg)";
  } else {
    price.innerHTML = value;
    minSlide.style.backgroundColor = " var(--toggle-bg)";
  }
}
