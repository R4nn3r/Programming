// alert("Hello world!");
// console.log("Hello world!");

let counter = 0;
let count = document.getElementById("counter");

function countNum() {
  counter++;
  console.log("Count: " + counter);
  count.innerHTML = counter;
  document.querySelector(".num").innerHTML = counter;

  if (counter == 30) {
    document.querySelector("span").innerHTML = "Done with first month of Js";
  }
}
const heading = document.querySelector("h2");

function hello() {
  if (heading.innerHTML === "Hello World!") {
    heading.innerHTML = "GoodBye!";
    document.querySelector("span").innerHTML = "Day (#1) Done for Today";
  } else {
    heading.innerHTML = "Hello World!";
    document.querySelector("span").innerHTML = "Day (#1)";
  }
}

const onbtn = document.getElementById("clickBtn");

function handleClick(e) {
  console.log("Clicked");
  onbtn.innerHTML = "Clicked";

  if (onbtn.classList.contains("red")) {
    onbtn.classList.remove("red");
    onbtn.innerHTML = "Click";
  } else {
    onbtn.classList.add("red");
  }
}

onbtn.addEventListener("click", handleClick);

onbtn.addEventListener("click", function (e) {
  // Functions Code Goes here
});
