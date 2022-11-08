function changeHamburger(change) {
  const menu = change.firstElementChild;
  const close = change.lastElementChild;

  menu.classList.toggle("not");
  close.classList.toggle("active");
}

function bookMark(mark) {
  mark.classList.toggle("marked");
  if (mark.classList.contains("marked")) {
    mark.querySelector(".bookmark").innerHTML = "Bookmarked";
  } else {
    mark.querySelector(".bookmark").innerHTML = "Bookmark";
  }
}

// Projects Selection
const selecting = document.querySelector(".selected");
const completed = document.querySelector(".completed");
const body = document.querySelector("body");

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
    card.parentElement.parentNode.parentElement.parentNode.querySelector(
      ".enterPledge"
    );
  pledgeBottom.classList.toggle("on");
}

function done(complete) {
  selecting.classList.remove("on");
  completed.classList.add("doneZo");
}
