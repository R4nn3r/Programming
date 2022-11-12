const input = document.querySelector("#checkbox");
const price = document.querySelector(".price");
const view = document.querySelector(".view");

// input.addEventListener("checked", () => {
//   let value = parseInt(price.innerHTML);
//   price.innerHTML = `${value - value * 0.25}.00`;
// });
const value = price.innerHTML;
function check(input) {
  if (input.checked) {
    let newValue = parseInt(price.innerHTML);
    price.innerHTML = `${newValue - newValue * 0.25}.00`;
  } else {
    price.innerHTML = value;
  }
}
