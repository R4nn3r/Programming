const button = document.querySelector("#submit");
button.disabled = true;

const input = document.querySelector("#input");

input.onkeyup = (e) => {
  if (input.value.length > 0) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
};
const form = document.querySelector("form");

form.onsubmit = () => {
  const textArea = document.querySelector("#todo");
  console.log(textArea);

  const div = document.createElement("div");

  div.innerText = input.value;
  console.log(div);

  textArea.appendChild(div);

  input.value = "";
  button.disabled = true;

  return false;
};
