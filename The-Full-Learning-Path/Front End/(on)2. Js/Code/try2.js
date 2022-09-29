document.querySelector("#sub").disabled = true;

const inputFiled = document.querySelector(".in_put");

inputFiled.onkeyup = (e) => {
  if (inputFiled.value.length > 0) {
    document.querySelector("#sub").disabled = false;
  } else {
    document.querySelector("#sub").disabled = true;
  }
};

const input = (document.querySelector("form").onsubmit = () => {
  const task = document.querySelector(".in_put").value;
  console.log(task);
  //   document.querySelector("#content").innerHTML = task;

  const li = document.createElement("li");
  li.innerHTML = task;
  document.querySelector("#tasks").append(li);
  document.querySelector(".in_put").value = "";

  document.querySelector("#sub").disabled = true;

  return false;
});
