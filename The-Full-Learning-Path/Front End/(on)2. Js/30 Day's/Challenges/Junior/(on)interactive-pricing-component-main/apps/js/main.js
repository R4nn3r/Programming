const input = document.querySelector("#checkbox");
const price = document.querySelector(".price");
const view = document.querySelector(".view");
const minSlide = document.querySelector(".min-slide");
const range = document.querySelector("#range");
const trackForPrice = Number.parseInt(range.value);

// Fill the slider background based on the position of the slider
range.addEventListener("change", () => {
  track = Number.parseInt(range.value);
  range.style.background = `linear-gradient(90deg, var(--slide-bg)${track}%, var(--slide-bar) ${track}%)`;
});

// Price tracing objects
const pricing = [
  {
    price: 8,
    pageViews: "10K",
    trackPercentage: 0,
  },
  {
    price: 12,
    pageViews: "50K",
    trackPercentage: 25,
  },
  {
    price: 16,
    pageViews: "100K",
    trackPercentage: 50,
  },
  {
    price: 24,
    pageViews: "500K",
    trackPercentage: 75,
  },
  {
    price: 36,
    pageViews: "1M",
    trackPercentage: 100,
  },
];

outPutPrice = (track) => {
  // const viewNum = parseInt(view.innerHTML);
  // const priceNum = parseInt(price.innerHTML);
  const priceObjs = pricing.find(
    (pricingOBJ) => pricingOBJ.trackPercentage === track
  );
  if (!range.checked) {
    view.innerHTML = priceObjs.pageViews;
    price.innerHTML = priceObjs.price;
  } else {
    view.innerHTML = priceObjs.pageViews;
    price.innerHTML = priceObjs.price * 0.25;
  }
};

range.addEventListener("input", () => {
  slider = Number.parseInt(range.value);
  outPutPrice(slider);
});

window.onload = () => {
  slider = 50;
  outPutPrice(slider);
};
