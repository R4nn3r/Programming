function cc(cards) {
  // Only change code below this line
  let count = 0;

  cards.forEach((card) => {
    switch (card) {
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        count += 1;
        break;
      case 7:
      case 8:
      case 9:
        count += 0;
        break;
      case 10:
      case "J":
      case "Q":
      case "K":
      case "A":
        count -= 1;
        break;
    }
  });

  if (count > 0) {
    return `${count} Bet`;
  } else if (count <= 0) {
    return `${count} Hold`;
  }

  return "Change Me";
  // Only change code above this line
}

const cards1 = [2, 3, 4, 5, 6];
const cards2 = [7, 8, 9];
const cards3 = [10, "J", "Q", "K", "A"];

// console.log(cc(cards1));
// console.log(cc(cards2));
// console.log(cc(cards3));

const myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true,
  },
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true,
  },
];

// console.log(myMusic);

const myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];

// Setup
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop != "tracks" && value !== "") {
    records[id][prop] = value;
  } else {
    if (records[id].hasOwnProperty(prop) && value !== "") {
      records[id][prop].push(value);
    } else if (!records[id].hasOwnProperty(prop) && value !== "") {
      records[id][prop] = [];
      records[id][prop].push(value);
    } else {
      delete records[id][prop];
    }
  }
  return records;
}

// updateRecords(recordCollection, 5439, "artist", "ABBA");
updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
// updateRecords(recordCollection, 5439, "tracks", "");

// console.log(recordCollection);

// console.log(recordCollection);

const a = 2;
const b = 10;

const sum = a + b;

// console.log(sum);

const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

// console.log(typeof total);
// console.log(total);

function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  // Only change code above this line

  // console.log(product);
  return product;
}

multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);

function summ(arr, n) {
  // Only change code below this line
  let added = 0;
  if (n <= 0) {
    return added;
  } else {
    return summ(arr, n - 1) + arr[n - 1];
  }
  // Only change code above this line
}

// console.log(summ([1, 2, 3, 4, 5], 2));

// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i]["firstName"] === name) {
      if (prop in contacts[i]) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
  // Only change code above this line
}

lookUpProfile("Akira", "jump");

// console.log(lookUpProfile("Harry", "likes"));

// console.log(contacts[0]["firstName"]);

function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  // Only change code above this line
}

// console.log(randomRange(5, 10));

function convertToInteger(str) {
  return parseInt(str, 2);
}

// console.log(convertToInteger("111001"));

function checkSign(num) {
  return num === 0 ? "zero" : num > 0 ? "positive" : "negative";
}

// console.log(checkSign(10));

function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}

// console.log(countdown(5));

function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {
    return [];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
const ul = document.querySelector(".ul");

// console.log(rangeOfNumbers(1, 10));

// console.log(document.title);
document.title = "Title from Js file";

const childUl = ul.children;

// console.log(childUl);

const divNew = document.createElement("div");
divNew.innerHTML = "<h1>New Div</h1>  <br>";

// ul.appendChild(divNew);

divNew.setAttribute("class", "newDiv");
divNew.setAttribute("id", "newDiv");

// console.log(newDiv);

const txt = document.createTextNode("Hello World!");

divNew.appendChild(txt);

const main = document.querySelector("main");
const div1 = main.querySelector(".card");

// console.log(main);
// console.log(div1);

const insertedNode = main.insertBefore(divNew, div1);
// console.log(insertedNode);

// Selecting elements
const form = document.querySelector("form");

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const text = document.querySelector("#text");
const p = form.querySelector("p");

form.onsubmit = (e) => {
  e.preventDefault();
  if (name.value == "" || email.value == "") {
    p.style.color = "red";
    p.innerText = "Please fill every field!";
  } else {
    p.style.color = "lime";
    name.value = "";
    email.value = "";
    text.value = "";
    p.innerText = "Great!";
  }
};

form.onfocus = (e) => {
  // text.placeholder = e.target.value;
  console.log(e.type);
};
form.oncopy = (e) => {
  console.log(e.type);
  const bb = form.querySelector("button");
  bb.disabled = false;
};

const body = document.querySelector("body");

const btn = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

let odd = ul.querySelectorAll("li:nth-child(odd)");
let even = ul.querySelectorAll("li:nth-child(even)");

btn.addEventListener("click", () => {
  // console.log(even);

  for (let i = 0; i < even.length; i++) {
    odd[i].innerText = "odd";
    odd[i].style.backgroundColor = "gray";

    even[i].innerText = "even";
    even[i].style.backgroundColor = "lightgray";
  }
});
btn2.addEventListener("click", () => {
  // console.log(even);
  const inul = ul.querySelector("ul");

  const li = inul.querySelector("li");
  li.style.backgroundColor = "red";

  const nxtli = li.nextElementSibling;
  nxtli.style.backgroundColor = "orange";
});

btn3.addEventListener("click", buttonClicked);

function buttonClicked(e) {
  if (e.altKey) {
    console.log("You Just CLiked the button while holding Alt!");
  } else if (e.shiftKey) {
    console.log("You Just CLiked the button while holding shift!");
  } else if (e.ctrlKey) {
    console.log("You Just CLiked the button while holding ctrl!");
  } else {
    console.log("You Just CLiked the button while holding nothing, Sad!");
  }

  // const outPut = document.querySelector(".output");
  // outPut.innerHTML = "<h3>Hello From click event!</h3>" + e.target.className;
}

btn3.addEventListener("mouseover", function (e) {
  btn3.classList.add("nice");
});
btn3.addEventListener("mouseleave", function (e) {
  btn3.classList.remove("nice");
});

const select = document.querySelector("select");
console.log(select);

select.onchange = function (e) {
  console.log(e.target.value);
  if (e.target.value === "one") {
    body.style.background = "white";
  } else if (e.target.value === "three") {
    body.style.background = "linear-gradient(45deg , red, blue)";
  } else if (e.target.value === "two") {
    body.style.background = "black";
  }
};

const add = (num) => {
  if (num <= 0) {
    return [];
  } else {
    const numbers = add(num - 1);
    numbers.unshift(num);
    return numbers;
  }
};

console.log(add(10));

const fib = (num) => {
  if (num <= 0) {
    return 0;
  } else if (num == 1 || num == 2) {
    return 1;
  } else {
    return fib(num - 1) + fib(num - 2);
  }
};

for (let i = 0; i < 10; i++) {
  console.log(fib(i) + " ");
}
