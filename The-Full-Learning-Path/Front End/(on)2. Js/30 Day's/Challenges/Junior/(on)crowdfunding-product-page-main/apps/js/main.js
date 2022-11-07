function changeHamburger(change) {
  const menu = change.firstElementChild;
  const close = change.lastElementChild;

  menu.classList.toggle("not");
  close.classList.toggle("active");
}

function bookMark(mark) {
  mark.classList.toggle("marked");
}
