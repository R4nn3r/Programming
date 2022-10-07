const quest = document.querySelectorAll(".boxxx");

quest.forEach((q) => {
  console.log(q);
  q.addEventListener("click", () => {
    const title = q.querySelector("h2");
    title.classList.toggle("selected");

    const icon = q.querySelector("img");
    icon.classList.toggle("rotate");

    const content = q.querySelector("#content");
    console.log(content);
    content.classList.toggle("visible");
  });
});
