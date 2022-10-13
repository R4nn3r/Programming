const form = document.querySelector("form");

form.onsubmit = (e) => {
  e.preventDefault();

  //   Check First Name
  const fname = document.querySelector("#fname");
  if (fname.value.trim() === "") {
    setErrorFor(fname);
  } else {
    fname.value = "";
    setSuccessFor(fname);
  }
  //   Check Last Name
  const lname = document.querySelector("#lname");
  if (lname.value.trim() === "") {
    setErrorFor(lname);
  } else {
    lname.value = "";
    setSuccessFor(lname);
  }

  //   Check Email
  const email = document.querySelector("#email");
  const emailParent = document.querySelector(".email");
  if (email.value.trim() === "") {
    setErrorFor(email);
  } else if (!checkEmail(email.value)) {
    email.value = "";
    email.placeholder = "email@example/com";
    const error = emailParent.querySelector("p");
    error.innerText = "Looks like this not an email";
    setErrorFor(email);
  } else {
    email.value = "";

    setSuccessFor(email);
  }

  //   Check Password
  const pass = document.querySelector("#pass");
  if (pass.value.trim() === "") {
    setErrorFor(pass);
  } else {
    pass.value = "";
    setSuccessFor(pass);
  }
};

setErrorFor = (input) => {
  const inputParent = input.parentElement;
  console.log(inputParent);

  inputParent.classList.remove("success");
  inputParent.classList.add("error");
};

setSuccessFor = (input) => {
  const inputParent = input.parentElement;
  console.log(inputParent);
  inputParent.classList.remove("error");
  inputParent.classList.add("success");
};

//  Check Email
checkEmail = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};
