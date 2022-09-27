// alert("Hello world!");
// console.log("Hello world!");

let counter = 0;
let count = document.getElementById("counter");

function countNum() {
  counter++;
  count.innerHTML = counter;
}

// function displaydate() {
//   document.getElementById("date").innerHTML = display();
// }

function changeThebs() {
  document.querySelector("span").innerHTML = "Day #1 (Done)";
  document.querySelector("button").innerHTML = "ForToday!";
}
