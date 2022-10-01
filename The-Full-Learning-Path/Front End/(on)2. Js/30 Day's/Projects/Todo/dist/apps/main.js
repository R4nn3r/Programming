// Second Section
const input_todo = document.querySelector("#todo-title");
const button_todo = document.querySelector("#todo-button");

button_todo.disabled = true;
button_todo.style.opacity = 0.75;
input_todo.onkeyup = (e) => {
  if (input_todo.value.length > 0) {
    button_todo.disabled = false;
    button_todo.style.opacity = 1;
  } else {
    button_todo.style.opacity = 0.75;
    button_todo.disabled = true;
  }
};

// Model

let todos;

// Retrieve localStorage
const savedTodos = JSON.parse(localStorage.getItem("todos"));


// Check if it's an array
if (Array.isArray(savedTodos)) {
  todos = savedTodos;
} else {
  todos = [
    {
      title: "Hello World!",
      dueDate: "2022-30-10",
      id: "id1",
    },
  ];
}

// Creates a todo
const createTodo = (title, dueDate) => {
  const id = "" + new Date().getTime();

  todos.push({
    title: title,
    dueDate: dueDate,
    id: id,
  });

  saveTodos();
};

// Deletes a todo
function removeTodo(idToDelete) {
  todos = todos.filter(function (todo) {
    if (todo.id === idToDelete) {
      return false;
    } else {
      return true;
    }
  });
  saveTodos();
}

function markChecked(todoId, checkId) {
  todos.forEach(function (todo) {
    const lineThrough = document.getElementById(todo.id);
    if (lineThrough.classList.contains("list")) {
      console.log(lineThrough);
      lineThrough.classList.replace("list", "line");
    }
    if (todo.id === todoId) {
      todo.isDone = checkId;
    }
  });
  saveTodos();
}

const saveTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// Controller
const addTodo = () => {
  const textbox = document.getElementById("todo-title");
  const title = textbox.value;
  textbox.value = "";

  const datePicker = document.getElementById("date-picker");
  const dueDate = datePicker.value;
  datePicker.value = "";

  createTodo(title, dueDate);
  render();
};

const deleteTodo = (event) => {
  const deleteButton = event.target;
  const idToDelete = deleteButton.id;

  removeTodo(idToDelete);
  render();
};

const addChecked = (event) => {
  const checkBox = event.target;

  const todoId = checkBox.dataset.todoId;
  const checkId = checkBox.checked;

  markChecked(todoId, checkId);
  render();
};

// View
const render = () => {
  // reset our list
  document.getElementById("todo-list").innerHTML = "";

  todos.forEach((todo) => {
    const element = document.createElement("div");
    element.id = todo.id;
    element.className = "list";
    element.innerText = todo.title + " - " + todo.dueDate;

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.className = "checkbox";
    checkBox.onchange = addChecked;
    checkBox.dataset.todoId = todo.id;
    if (todo.isDone === true) {
      checkBox.checked = true;
    } else {
      checkBox.checked = false;
    }

    element.prepend(checkBox);

    const deleteButton = document.createElement("div");
    deleteButton.onclick = deleteTodo;
    deleteButton.id = todo.id;
    deleteButton.className = "done";
    element.appendChild(deleteButton);

    const todoList = document.getElementById("todo-list");
    todoList.appendChild(element);

    button_todo.disabled = true;
  });
};

render();

const button = document.querySelector("[mobile-toggle]");

button.addEventListener("click", () => {
  const main = document.querySelector(".main");

  main.classList.toggle("main__hidden");
});
