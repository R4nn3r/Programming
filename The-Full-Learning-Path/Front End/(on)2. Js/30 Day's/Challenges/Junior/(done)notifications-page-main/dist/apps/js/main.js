// Theme Changer
const checkBox = document.querySelector("#checkbox");
const body = document.querySelector("body");

const theme = ["light", "brown", "dark"];

checkBox.addEventListener("change", (e) => {
  body.className = theme[getRand()];
});

var getRand = (function () {
  var nums = [0, 1, 2];
  var current = [];
  function rand(n) {
    return (Math.random() * n) | 0;
  }
  return function () {
    if (!current.length) current = nums.slice();
    return current.splice(rand(current.length), 1);
  };
})();

const userDetail = document.querySelectorAll(".user-detail");
const markAll = document.querySelector(".linkText");
const notification = document.querySelector("#notification");

// Find and count the cards that have a redDot
userDetail.forEach((item) => {});

// Mark all the notifications as read
markAll.addEventListener("click", () => {
  userDetail.forEach((item) => {
    const card = item.firstElementChild;
    card.classList.remove("redDot");

    const parent = card.parentElement.parentNode;

    parent.classList.remove("background");
    parent.classList.add("background2");
    notification.innerHTML = "0";
    notification.style.display = "none";
  });
});

// Individual notification clearing
const notCard = document.querySelectorAll(".notification");
let n = 0;

notCard.forEach((item) => {
  const card = item.firstElementChild;
  const parent = card.parentElement;

  if (parent.classList.contains("background")) {
    n += 1;
  }
});

notCard.forEach((item) => {
  // When selected remove redDot and change the background

  item.addEventListener("click", (e) => {
    item.classList.remove("background");
    item.classList.add("background2");

    const redDot2 = item.lastElementChild.firstElementChild;
    redDot2.classList.remove("redDot");
    n -= 1;
  });
});
notification.innerHTML = n;
