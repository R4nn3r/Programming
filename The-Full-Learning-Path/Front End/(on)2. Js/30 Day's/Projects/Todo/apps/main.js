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
  input.placeholder = "Added! Got More?";
  button.disabled = true;

  return false;
};

const form_2 = document.querySelector("#form_2");
const button_2 = document.querySelector("#submit_2");
const todo = form_2.querySelector("#input_2");

button_2.disabled = true;
const todos = [];

todo.onkeyup = () => {
  if (todo.value.length > 0) {
    button_2.disabled = false;
  } else {
    button_2.disabled = true;
  }
};
const todo_2 = document.querySelector("#todo_2");

form_2.onsubmit = function (e) {
  todos.push(todo.value);
  const div_2 = document.createElement("div");

  todos.forEach(function (todoText) {
    div_2.innerHTML = todoText;
    todo_2.appendChild(div_2);
  });

  todo.value = "";
  todo.placeholder = "Added! Got More?";
  button_2.disabled = true;

  return false;
};

// todos.indexOf("element")
// delete todos[0]
