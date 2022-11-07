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
const body = document.querySelector("body");

function selected(select) {
  selecting.classList.toggle("on");
  body.classList.toggle("overlay");
}

function closeMe(close) {
  selecting.classList.toggle("on");
  body.classList.toggle("overlay");
}
