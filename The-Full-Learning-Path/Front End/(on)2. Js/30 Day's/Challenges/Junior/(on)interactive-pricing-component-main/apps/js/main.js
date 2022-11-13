const price = document.querySelector(".price");
const view = document.querySelector(".view");
const minSlide = document.querySelector(".min-slide");
const range = document.querySelector("#range");
const trackForPrice = Number.parseInt(range.value);
const query = window.matchMedia("(max-width: 649px)");
const discount = document.querySelector(".discount");

// Adjusting the Discount based on query
screenTest = (e) => {
  if (e.matches) {
    /* the viewport is 650 pixels wide or less */
    discount.innerHTML = "-25%";
  } else {
    /* the viewport is more than 650 pixels wide */
    discount.innerHTML = "25% discount";
  }
};
query.addEventListener("change", screenTest);

// Price tracing objects
const pricing = [
  {
    price: "8.00",
    pageViews: "10K",
    trackPercentage: 0,
  },
  {
    price: "12.00",
    pageViews: "50K",
    trackPercentage: 25,
  },
  {
    price: "16.00",
    pageViews: "100K",
    trackPercentage: 50,
  },
  {
    price: "24.00",
    pageViews: "500K",
    trackPercentage: 75,
  },
  {
    price: "36.00",
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
  const input = document.querySelector("#checkbox");

  if (!input.checked) {
    view.innerHTML = priceObjs.pageViews;
    price.innerHTML = priceObjs.price;
  }

  sub = (check) => {
    if (check.checked) {
      price.innerHTML = `${priceObjs.price - priceObjs.price * 0.25}.00`;
    } else {
      price.innerHTML = priceObjs.price;
    }
  };
};

// Fill the slider background based on the position of the slider
range.addEventListener("input", () => {
  track = Number.parseInt(range.value);
  range.style.background = `linear-gradient(90deg, var(--slide-bg)${track}%, var(--slide-bar) ${track}%)`;
  outPutPrice(track);
});

window.onload = () => {
  slider = 50;
  screenTest(query);
  outPutPrice(slider);
};
