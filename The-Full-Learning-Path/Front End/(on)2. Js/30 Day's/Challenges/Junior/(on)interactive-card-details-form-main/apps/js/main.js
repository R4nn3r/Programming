// From validations
const form = document.querySelector("form");

// inputs
const name = form.querySelector(".name");
const num = form.querySelector(".num");
const mm = form.querySelector(".mm");
const yy = form.querySelector(".yy");
const cvc = form.querySelector(".cvcin");

// button
const btn = form.querySelector(".cardbtn");

// on submit
form.onsubmit = (e) => {
  e.preventDefault();

  const inputs = e.target.querySelectorAll("input");

  inputs.forEach((input) => {
    if (input.className === "cvcin") {
      if (input.value === "") {
        input.style.outline = "1px solid red";
        const error = input.nextElementSibling;
        error.classList.remove("hidden");
      } else {
        input.style.outline = "1px solid green";
        const error = input.nextElementSibling;
        error.classList.add("hidden");
      }
    } else if (input.className !== "cardbtn") {
      if (input.value === "") {
        input.style.border = "1px solid red";
        const error = input.parentElement.nextElementSibling;
        error.classList.remove("hidden");
      } else {
        input.style.border = "1px solid green";
        const error = input.parentElement.nextElementSibling;
        error.classList.add("hidden");
      }
    }
  });

  inputs.forEach((input) => {
    if (input.className !== "cardbtn") {
      if (input.value !== "") {
        input.value = "";
      }
    }
  });
};
