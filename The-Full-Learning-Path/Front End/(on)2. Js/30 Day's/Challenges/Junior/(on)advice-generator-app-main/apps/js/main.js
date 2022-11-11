const advice = document.querySelector(".advice");
const number = document.querySelector(".no");

const dice = () => {
  let testURL = "https://api.adviceslip.com/advice";
  const file = fetch(testURL)
    .then((response) => response.json())
    .then((adviceData) => {
      const adviceObj = adviceData.slip;
      number.innerHTML = adviceObj.id;
      advice.innerHTML = `<p> ${adviceObj.advice}</p> `;
    })
    .catch((error) => {
      console.log("error ->", error);
    });
};
