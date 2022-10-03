let element = document.createElement("div");
element.classList.add("section_div");

let themeSelector = document.createElement("section");
themeSelector.id = "theme";
themeSelector.className = "theme";

let themePick1 = document.createElement("input");
themePick1.type = "checkbox";
themePick1.id = "themePick1";
themePick1.className = "themePick";
let themePick2 = document.createElement("input");
themePick2.type = "checkbox";
themePick2.id = "themePick2";
themePick2.className = "themePick";

let themePick3 = document.createElement("input");
themePick3.type = "checkbox";
themePick3.id = "themePick3";
themePick3.className = "themePick";

let listOne = [];
listOne.push(themePick1, themePick2, themePick3);

for (let i = 0; i < listOne.length; i++) {
  themeSelector.appendChild(listOne[i]);
}

let h1 = document.createElement("h1");
h1.innerHTML = "Hello World!";
h1.style.width = "100%";

let button = document.createElement("button");
button.innerHTML = "Hello World!";
button.id = "button";
button.className = "button";

element.appendChild(button);
element.prepend(h1);
element.appendChild(themeSelector);

const main = document.querySelector(".main");

main.appendChild(element);

button.addEventListener("click", () => {
  const background = document.querySelector("body");

  background.classList.toggle("red");
});

themePick1.addEventListener("change", () => {
  const background = document.querySelector("body");

  background.classList.toggle("green");
});

themePick2.addEventListener("change", () => {
  const background = document.querySelector("body");

  background.classList.toggle("yellow");
});

themePick3.addEventListener("change", () => {
  const background = document.querySelector("body");

  background.classList.toggle("lime");
});

const letter = "Letter to my soul!";

const letterArray = letter.split(" ");

// console.log(letterArray);

for (words in letterArray) {
  let x = letterArray[words];
  x = "changes";
  // console.log(x , words);
}

const random = ["tree", 795, [0, 1, 2]];
// console.log(random[2][3])

// random.splice(random.indexOf(795), 1);
// console.log(" \n=========================");

const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
const arr = data.split(",");
for (x in arr) {
  // console.log(arr[x])
}

const joined = arr.join(" ");
// console.log(joined)

const list = document.querySelector(".output");
const totalBox = document.querySelector(".output");
let total = 0;
// list.innerHTML = '';
// totalBox.textContent = '';
const products = [
  "Underpants:6.99",
  "Socks:5.99",
  "T-shirt:14.99",
  "Trousers:31.99",
  "Shoes:23.99",
];

for (let x in products) {
  // number 3
  const product = products[x].split(":");

  const name = product[0];
  const price = Number(product[1]);
  const itemText = `${name} — $${price}`;
  total += price;

  const listItem = document.createElement("li");
  listItem.textContent = itemText;
  list.appendChild(listItem);

  totalBox.textContent = `Total: $${total.toFixed(2)}`;
}

let myArray = [
  "Ryu",
  "CKen",
  "ChunLi",
  "Cammy",
  "Call",
  "Sakura",
  "Sagat",
  "Juri",
];

// console.log(myArray);
// console.log(myArray.length + " elements");

// for (x in myArray) {
//     console.log(x + " " +myArray[x]);

//   if (myArray[x].startsWith("C")) {
//     console.log(myArray[x] + " -> " +"starts with C");
//     myArray.splice(myArray.indexOf(myArray[x]),1);
//   }

// }

// console.log("=================================================");

const fruits = new Array("Orange", "Mango", "Banana", "Apple", "Grapes");

fruits.unshift("New Fruit 'Front'");
fruits.push("New Fruit 'Back'");
fruits[7] = "New Fruit 'index 0";

const NewArray = myArray.concat(fruits);
// console.log(NewArray);

// for (n of NewArray) {
//   console.log(n);
// }

const person = {
  frisNname: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "white",
  hobbies: ["music", "coding", "other"],
  address: {
    street: "Mountain View",
    city: "Minnesota",
    state: "MN",
  },
};

// console.log(typeof person)
// console.log(person.hobbies[2])
// console.log(person.address.state)

// for (objects in person) {
//   console.log( objects+": "+ person[objects])
// }

// const {age, address:{city}} = person;

// console.log(age)
// console.log(city)

const dataTypes = {
  strings: "string",
  oull: "null",
  numbers: [1, 2, 3, 4],
  boolen: {
    one: true,
    two: false,
  },
};

dataTypes.email = "email@example.com";

const {
  strings,
  oull,
  boolen: { one },
  email,
} = dataTypes;

const todos = [
  {
    id: 1,
    text: "Hello, one!",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Hello, two!",
    isCompleted: false,
  },
  {
    id: 3,
    text: "Hello, three!",
    isCompleted: true,
  },
  {
    id: 4,
    text: "Hello, four!",
    isCompleted: false,
  },
];

// for (let step = 0; step < 5; step++) {
//   // Runs 5 times, with values of step 0 through 4.
//   console.log(`Walking east ${step+1} step`);
// }

// NewArray.forEach((element, index) => {
//   console.log(element + " -> " + index);
// });

const array2 = NewArray.map((element) => {
  if (!element.startsWith("C")) {
    return element;
  }
});

// console.log(array2);

var vararr = ["a", "b", "c", "d", "e"];

const add = (x, y) => {
  // console.log(x, y);
  return x + y;
};

const stringed = vararr.reduce(add, "Added");

// console.log(stringed);

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;
const adder = (x, y) => {
  return x + y;
};

// console.log(num.reduce(adder));

const fixedArray = NewArray.filter((arr) => {
  if (!arr.startsWith("C")) {
    return true;
  }
});

// console.log(fixedArray);

const demo = [100, 20, 89, 3, 17];

// console.log(demo.sort());

const sortedArray = demo.sort((a, b) => {
  // console.log(a, b);
  return a - b;
});

// console.log(sortedArray);

todos.forEach((todo) => {
  if (todo.isCompleted === false) {
    // console.log(todo);
  }
});

const checkFilter = todos
  .filter((todo) => {
    if (todo.isCompleted === true) {
      return true;
    }
  })
  .map((todo) => {
    return todo.text;
  });

// console.log(checkFilter);

const select = document.querySelector("select");
const label = document.querySelector("label");
label.style.marginLeft = "1em";
const para = document.querySelector("p");

select.addEventListener("change", function (e) {
  const choice = select.value;
  // console.log(choice);

  switch (choice) {
    case "sunny":
      para.textContent =
        "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
      break;
    case "rainy":
      para.textContent =
        "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
      break;
    case "snowing":
      para.textContent =
        "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
      break;
    case "overcast":
      para.textContent =
        "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
      break;
    default:
      para.textContent = " ";
  }
});

const y = "10";

if (y === 10) {
  console.log(y, " is 10");
} else if (y > 10 || y < 10) {
  console.log(x, " is less or more the 10");
} else if (y == 10) {
  console.log("x is not 10");
}

const z = 10;

const color = z > 10 ? "green" : "yellow";

console.log(color);
