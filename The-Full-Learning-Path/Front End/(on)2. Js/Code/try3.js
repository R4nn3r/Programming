const subBtn = document.querySelector(".submit");
subBtn.disabled = true;

const form = document.querySelector("form");
const inputArea = document.querySelector("#input");

inputArea.onkeyup = (e) => {
  if (inputArea.value.length > 0) {
    subBtn.disabled = false;
  } else {
    subBtn.disabled = true;
  }
};

form.onsubmit = () => {
  const input = document.querySelector("#input").value;

  const ul = document.querySelector(".list");

  const list = document.createElement("li");
  list.innerHTML = input;

  ul.append(list);

  document.querySelector("#input").value = "";

  subBtn.disabled = true;
  return false;
};
