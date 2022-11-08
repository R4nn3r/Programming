// Projects Selection
const selecting = document.querySelector(".selected");
const completed = document.querySelector(".completed");
const body = document.querySelector("body");
const toggler = document.querySelector(".toggle");

function changeHamburger(change) {
  const menu = change.firstElementChild;
  const close = change.lastElementChild;

  menu.classList.toggle("not");
  close.classList.toggle("active");
  // body.classList.toggle("overlay");
  toggler.classList.toggle("on");
  body.classList.toggle("fixed");
}

function bookMark(mark) {
  mark.classList.toggle("marked");
  if (mark.classList.contains("marked")) {
    mark.querySelector(".bookmark").innerHTML = "Bookmarked";
  } else {
    mark.querySelector(".bookmark").innerHTML = "Bookmark";
  }
}

function selected(select) {
  selecting.classList.add("on");
  body.classList.add("overlay");
}

function closeMe(close) {
  selecting.classList.remove("on");
  body.classList.remove("overlay");
}
function closeMeSec(close) {
  body.classList.remove("overlay");
  completed.classList.remove("doneZo");
}

function pledge(card) {
  const pledgeBottom =
    card.parentElement.parentElement.parentNode.querySelector(".enterPledge");
  pledgeBottom.classList.toggle("on");
}

function done(complete) {
  selecting.classList.remove("on");
  body.classList.add("overlay");
  completed.classList.add("doneZo");
}

function theme() {
  body.classList.toggle("dark-theme");
}
