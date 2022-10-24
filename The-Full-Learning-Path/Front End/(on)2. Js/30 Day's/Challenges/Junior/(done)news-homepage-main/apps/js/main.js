const hidden = document.querySelector(".hidden");
const body = document.querySelector("body");
function myFunction(x) {
  x.classList.toggle("change");
  hidden.classList.toggle("visible");
  body.classList.toggle("overflow");
}

//  card animation
const cards = document.querySelectorAll(".card");
const span = document.querySelector("span");

window.addEventListener("scroll", () => {
  if (isScrolledIntoView(cards[2])) {
    cards[0].classList.add("inView");
    cards[1].classList.add("inView2");
    cards[2].classList.add("inView3");
  }
});
function isScrolledIntoView(elem) {
  var rect = elem.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;

  var isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;

  return isVisible;
}

//  Crazy Theme
const crazy = document.querySelector(".crazy");
crazy.addEventListener("click", () => {
  body.classList.add("crazy");
  const p = crazy.parentElement;
  console.log(p);
  p.innerHTML = "You clicked it? lol";
});

console.log("At the end of the day what will happen will happen.");
