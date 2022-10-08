const share = document.querySelector("#shareBtn");
console.log(share);

share.addEventListener("click", (e) => {
  const social = document.querySelector(".check");
  social.classList.toggle("socials");
});
