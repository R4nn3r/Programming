const quest = document.querySelectorAll(".boxxx");

quest.forEach((q) => {
  console.log(q);
  q.addEventListener("click", () => {
    const content = q.querySelector("#content");
    console.log(content);
    content.classList.toggle("hidden");
  });
});
