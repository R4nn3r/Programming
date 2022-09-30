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

  const div = document.createElement("section");

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
const date = document.querySelector("#date");

button_2.disabled = true;
let todos = [];

todo.onkeyup = () => {
  if (todo.value.length > 0) {
    button_2.disabled = false;
  } else {
    button_2.disabled = true;
  }
};
const todo_2 = document.querySelector("#todo_2");

function doneTodo(event) {
  console.log(event);
  const doneButton = event.target;
  const donebtnId = doneButton.id;
}

form_2.onsubmit = function (e) {
  const div_2 = document.createElement("div");
  const doneBtn = document.createElement("div");
  doneBtn.className = "done";
  doneBtn.onclick = doneTodo;

  //   Reset the list
  if (todo.value === "clear") {
    todo_2.innerHTML = "";
    todos = [];
  } else {
    const iden = new Date().getTime();
    const todo_object = {
      todo_txt: todo.value,
      dueDate: date.value,
      id: iden,
    };
    todos.push(todo_object);
  }

  todos.forEach(function (todoText) {
    div_2.innerHTML = todoText.todo_txt + " " + todoText.dueDate;
    doneBtn.id = todoText.id;

    todo_2.appendChild(div_2);
    div_2.appendChild(doneBtn);
  });

  todo.value = "";
  todo.placeholder = "Done! 'clear'";
  button_2.disabled = true;

  return false;
};

// todos.indexOf("element")
// delete todos[0]
