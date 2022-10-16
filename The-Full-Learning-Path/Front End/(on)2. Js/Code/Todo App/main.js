const themes = document.querySelector(".themes");
const body = document.querySelector("body");
const inputs = themes.querySelectorAll(".check");

const themesArray = ["theme", "theme1", "theme2", "theme3", "theme4", "theme5"];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

themes.addEventListener("click", (e) => {
  console.log(e.target);
  body.className = "";
  body.classList.toggle(themesArray[getRandomInt(5, 0)]);
});

const btn = document.querySelector("#btnAdd");

const input = document.querySelector("#text");

btn.addEventListener("click", () => {
  if (input.value !== "") {
    input.style.border = "1px solid currentColor";
    input.placeholder = "Add Items...";

    const li = document.createElement("li");

    const p = document.createElement("p");
    p.className = "para";
    p.innerText = input.value;
    li.appendChild(p);

    const ir = document.createElement("i");
    ir.className = "fa-regular fa-trash-can remove";

    const id = document.createElement("i");
    id.className = "fa-solid fa-clipboard-check done";

    li.appendChild(id);
    li.appendChild(ir);

    const div = document.getElementById("items");

    const ul = div.firstElementChild;

    ul.appendChild(li);

    input.value = "";
  } else {
    input.style.border = "2px solid red";
    input.placeholder = "Make sure This is not Blank!";
  }
});

const todo = document.querySelector("#todo");

todo.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove")) {
    var li = e.target.parentElement;
    todo.removeChild(li);
  }
  if (e.target.classList.contains("done")) {
    var li = e.target.parentElement;
    const p = li.querySelector(".para");
    p.classList.toggle("lineThrough");
  }
});

const filter = document.querySelector(".filter");
const inputSearch = document.querySelector("#input");

inputSearch.onkeyup = (e) => {
  e.preventDefault();
  var text = e.target.value.toLowerCase();
  var items = todo.getElementsByTagName("li");

  Array.from(items).forEach((item) => {
    let itemName = item.firstElementChild.textContent.toLowerCase();

    if (itemName.indexOf(text) === -1) {
      item.style.display = "none";
    } else {
      item.style.display = "flex";
      item.style.boxShadow = "2px 5px 0px currentColor";
    }
  });
};
