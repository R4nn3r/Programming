// alert("Hello world!");
console.log("Hello world!");

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
  // console.log(e);
  console.log("Clicked");
  onbtn.innerHTML = "Clicked";

  if (onbtn.classList.contains("red")) {
    onbtn.classList.remove("red");
    onbtn.innerHTML = "Click";
  } else {
    onbtn.classList.add("red");
  }
}

onbtn.addEventListener("click", function (e) {
  console.log(this);
});

onbtn.addEventListener("click", (e) => {
  console.log(this);
});

onbtn.addEventListener("click", handleClick);

const color = document.querySelector(".circle");
const sectionDiv = document.querySelector(".section_div");

color.addEventListener("mouseover", function (e) {
  if (color.classList.contains("circle-plus")) {
    color.classList.remove("circle-plus");
  } else {
    color.classList.add("circle-plus");
  }
});

color.addEventListener("click", function (e) {
  if (color.classList.contains("circle-plus2")) {
    color.classList.remove("circle-plus2");
    sectionDiv.classList.remove("section_div-2");
    sectionDiv.classList.add("section_div");
  } else {
    color.classList.add("circle-plus2");
    sectionDiv.classList.add("section_div-2");
    sectionDiv.classList.remove("section_div");
  }
});

const Firstheading = document.querySelector(".first");
console.log(Firstheading);

Firstheading.addEventListener("mouseout", function (e) {
  if (Firstheading.classList.contains("red")) {
    Firstheading.classList.remove("red");
  } else {
    Firstheading.classList.add("red");
  }
});
