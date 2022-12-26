/* Class */
class Calculator {
  constructor(tipAmount, totalAmount) {
    this.tipAmount = tipAmount;
    this.totalAmount = totalAmount;
  }
}

/* Selectors */
const billInput = document.querySelector("[data-bill-input]");
const peopleInput = document.querySelector("[data-people-input]");

const percent = document.querySelectorAll("[data-percent]");
const customIn = document.querySelector("[data-percent-input]");

const tipAmount = document.querySelector("[data-tip]");
const totalAmount = document.querySelector("[data-total]");

const resetButton = document.querySelector("[data-reset]");

/* Creating an object from the class */
const calculator = new Calculator();

/* percentile's */
percent.forEach((per) => {
  per.addEventListener("click", (e) => {
    console.log(e.target.dataset.value);
  });
});
