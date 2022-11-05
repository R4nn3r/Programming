/* const dropDown = document.querySelector(".drop-down");
dropDown.className = "drop-down";
const arrow = document.querySelector(".arrow");
arrow.className = "arrow";

function toggle(item) {
  const arrow = item.firstElementChild;
  const drop = item.parentNode.lastElementChild;

  arrow.classList.toggle("opened");
  drop.classList.toggle("closed");
}
 */

const toggler = document.querySelectorAll(".toggler");

toggler.forEach((toggle) => {
  toggle.addEventListener("click", (e) => {
    e.target.firstElementChild.classList.toggle("opened");
    e.target.parentNode.lastElementChild.classList.toggle("drop");
  });

  // blur event (only one dropdown can be active at a time)
  toggle.addEventListener("blur", (event) => {
    const arrowTwo = event.target.firstElementChild.classList.remove("opened");
    const container =
      event.target.parentNode.lastElementChild.classList.remove("drop");
  });
});
