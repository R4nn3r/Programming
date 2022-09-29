// Get the button and disable it
const button = document.querySelector("#submit");
button.disabled = true;

// Get the div with the input area
const input = document.querySelector("#input");

// Add precaution to the input field
input.onkeyup = (e) => {
  if (input.value.length > 0) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
};
const form = document.querySelector("form");

form.onsubmit = () => {
  // Get the input area's value
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

// Create a new div element
// Assign the value to the div element
// Clear the test area
