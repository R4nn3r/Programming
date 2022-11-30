const days = document.querySelectorAll(".day");
const bar = document.querySelectorAll(".block");
const details = document.querySelectorAll(".detail > p");

let showArray = function (data) {
  for (let prop in data) {
    let blockDay = data[prop].day;
    let blockAmount = data[prop].amount;
    days[prop].textContent = blockDay;
    details[prop].textContent = `$${blockAmount}`;

    bar[prop].classList.add("status");
    // console.log(data[prop].day);
  }
};

fetch("./data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    showArray(data);
  });

function theme() {
  document.querySelector("body").classList.toggle("dark-theme");
}
