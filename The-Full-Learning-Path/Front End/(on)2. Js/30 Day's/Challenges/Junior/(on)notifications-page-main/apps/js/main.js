compute = (num) => {
  let total = 0;

  for (let i = 0; i > 0; i--) {
    console.log("[");

    for (let j = 0; j < i; j++) {
      console.log(`${i} * ${j + 1}^ ${i} +`);
      total += i * Math.pow(j + 1, i);
    }
    console.log("]");
  }
  console.log(total);
};
