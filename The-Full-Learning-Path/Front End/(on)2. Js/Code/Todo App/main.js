const themes = document.querySelector(".themes");
const body = document.querySelector("body");
const inputs = themes.querySelectorAll(".check");

themes.addEventListener("change", (e) => {
  body.classList.toggle(e.target.value);
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

    const divRemove = document.createElement("div");
    divRemove.className = "done";
    divRemove.innerHTML = "x";
    li.appendChild(divRemove);

    const divDone = document.createElement("div");
    divDone.className = "remove";
    divDone.innerHTML = "x";
    li.appendChild(divDone);

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

console.log(todo);

inputSearch.onkeyup = (e) => {
  e.preventDefault();
  var text = e.target.value.toLowerCase();
  var items = todo.getElementsByTagName("li");
  console.log(items);

  Array.from(items).forEach((item) => {
    let itemName = item.firstElementChild.textContent.toLowerCase();
    console.log(itemName);

    if (itemName.indexOf(text) === -1) {
      item.style.display = "none";
    } else {
      item.style.display = "flex";
      item.style.boxShadow = "2px 5px 0px currentColor";
    }
  });
};
