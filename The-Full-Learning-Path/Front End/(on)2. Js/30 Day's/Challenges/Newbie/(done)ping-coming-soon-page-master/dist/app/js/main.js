const form = document.querySelector("form");
const email = document.querySelector("#email");

form.onsubmit = (e) => {
  const emailIn = email.value.trim();
  e.preventDefault();

  checkInput(emailIn);
};

checkInput = (inmail) => {
  const formControl = document.querySelector(".form-control");
  const error = formControl.querySelector("small");
  error.style.fontStyle = "italic";

  if (inmail === "") {
    formControl.classList.remove("success");
    formControl.classList.add("error");
    error.innerText = "Email cannot be blank!";
  } else if (!checkEmail(inmail)) {
    formControl.classList.add("error");
    formControl.classList.remove("success");

    email.value = "";
    email.placeholder = "example@gmail.com";

    error.innerText = "Please provide a valid email address!";
  } else {
    email.value = "";
    email.placeholder = "Email successfully sent!";

    formControl.classList.remove("error");
    formControl.classList.add("success");
  }
};

checkEmail = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};
