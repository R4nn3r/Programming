const user = document.querySelector("#username");
const email = document.querySelector("#email");
const pass = document.querySelector("#password1");
const pass_2 = document.querySelector("#password");

const form = document.querySelector("form");

const check = form.querySelectorAll("div");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInput();
});

const checkInput = () => {
  // Get the values of the inputs
  const userIn = user.value.trim();
  const emailIn = email.value.trim();
  const passIn = pass.value.trim();
  const pass_2In = pass_2.value.trim();

  //   Check user
  if (userIn === "") {
    setErrorFor(user, "Username cannot be blank!");
  } else {
    setSuccessFor(user);
  }

  // Check email
  if (emailIn === "") {
    setErrorFor(email, "Email cannot be blank!");
  } else if (!isEmail(emailIn)) {
    // email.attr("placeholder", "example@gmail.com");
    setErrorFor(email, "Must be a valid email!");
  } else {
    setSuccessFor(email);
  }

  //   Check password
  //   one
  if (passIn === "") {
    setErrorFor(pass, "Password cannot be blank!");
  } else {
    if (passIn.length < 4) {
      setErrorFor(pass, "Password needs to be longer!");
    } else if (passIn != pass_2In) {
      setErrorFor(pass, "Passwords Need to be Identical!");
    } else {
      setSuccessFor(pass);
    }
  }

  //   two
  if (pass_2In === "") {
    setErrorFor(pass_2, "Password cannot be blank!");
  } else {
    if (pass_2In.length < 4) {
      setErrorFor(pass_2, "Password needs to be longer!");
    } else if (passIn != pass_2In) {
      setErrorFor(pass_2, "Passwords Need to be Identical!");
    } else {
      setSuccessFor(pass_2);
    }
  }
};

setErrorFor = (value, errorTxt) => {
  const formControl = value.parentElement;
  const small = formControl.querySelector("small");

  //   display the error message
  small.innerText = errorTxt;

  // adding the error class to the parent element
  formControl.className = "form-control error";
};

setSuccessFor = (value) => {
  const formControl = value.parentElement;
  formControl.className = "form-control success";
};

isEmail = (email) => {
  const check =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );

  return check;
};
