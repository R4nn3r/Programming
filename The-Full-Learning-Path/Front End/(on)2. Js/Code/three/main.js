const themes = document.querySelector(".themes");
const body = document.querySelector("body");
const inputs = themes.querySelectorAll(".check");

themes.addEventListener("change", (e) => {
  body.classList.toggle(e.target.value);
});

const btn = document.querySelector("#btnAdd");

const input = document.querySelector("#text");

btn.addEventListener("click", () => {
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
});
