const quest = document.querySelectorAll(".boxxx");

quest.forEach((q) => {
  console.log(q);
  q.addEventListener("click", () => {
    const title = q.querySelector("h4");
    title.classList.toggle("selected");

    const content = q.querySelector("#content");
    console.log(content);
    content.classList.toggle("hidden");
  });
});
