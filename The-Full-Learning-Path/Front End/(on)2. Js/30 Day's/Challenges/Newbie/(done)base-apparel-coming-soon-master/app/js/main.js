const form = document.querySelector("form");
const clear = document.querySelector("input");
const email = form.querySelector(".email");
const btn = document.querySelector("button");

form.onsubmit = (e) => {
  e.preventDefault();

  const emailIn = email.value.trim();
  console.log(emailIn);
  if (emailIn === "") {
    setErrorFor(email, "Email cannot be blank!");
  } else if (!isEmail(emailIn)) {
    setErrorFor(email, "Please provide a valid email");
    clear.value = "";
    clear.placeholder = "example@gmail.com";
  } else {
    clear.value = "";
    clear.placeholder = "Email successfully sent!";
    btn.classList.add("green");
    setSuccessFor(email);
  }
};

setErrorFor = (tag, input) => {
  const formControl = tag.parentElement;

  const small = formControl.querySelector("small");
  small.innerText = input;

  formControl.classList = "form__control form-control error";
};

setSuccessFor = (tag, input) => {
  const formControl = tag.parentElement;

  formControl.classList = "form__control form-control success";
};

isEmail = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};
