const rate = document.querySelector(".r-section");
const thank = document.querySelector(".t-section");

const cta = document.querySelector("#button");
cta.disabled = true;

const ul = document.querySelector("#selection");
const li = document.querySelectorAll("li");
console.log(li);

ul.addEventListener("click", (e) => {
  const clicked = e.target;
  const index = e.target.id;

  sendIndex(index);
  li.forEach((list) => {
    if (list.classList.contains("active")) {
      list.classList.remove("active");
    }
    clicked.classList.add("active");
    cta.disabled = false;
  });
});

cta.addEventListener("click", () => {
  if (thank.classList.contains("hidden")) {
    thank.classList.remove("hidden");
    rate.classList.add("hidden");
  }
});

const sendIndex = (index) => {
  const rating = document.querySelector("#rating");
  rating.innerHTML = "";

  const rates = ["1", "2", "3", "4", "5"];
  if (rates.includes(index)) {
    const p = document.createElement("p");
    p.textContent = `You selected ${index} out of 5`;

    rating.appendChild(p);
  } else {
    const p = document.createElement("p");
    p.textContent = `Sorry, if you didn't enjoy the experience.`;
    rating.appendChild(p);
  }
};
