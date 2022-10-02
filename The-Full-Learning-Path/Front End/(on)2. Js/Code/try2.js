let element = document.createElement('div');
element.classList.add("section_div");

let themeSelector = document.createElement('section');
themeSelector.id = 'theme';
themeSelector.className = 'theme';

let themePick1 = document.createElement('input');
themePick1.type = 'checkbox';
themePick1.id = 'themePick1';
themePick1.className = 'themePick';
let themePick2 = document.createElement('input');
themePick2.type = 'checkbox';
themePick2.id = 'themePick2';
themePick2.className = 'themePick';


let themePick3 = document.createElement('input');
themePick3.type = 'checkbox';
themePick3.id = 'themePick3';
themePick3.className = 'themePick';

let listOne = [];
listOne.push(themePick1, themePick2, themePick3)

for (let i = 0; i < listOne.length; i++) {
  themeSelector.appendChild(listOne[i])
}




let h1 = document.createElement('h1');
h1.innerHTML = 'Hello World!';
h1.style.width = '100%';

let button = document.createElement('button');
button.innerHTML = 'Hello World!';
button.id = 'button';
button.className = "button";

element.appendChild(button);
element.prepend(h1);
element.appendChild(themeSelector);


const main = document.querySelector('.main');

main.appendChild(element);


button.addEventListener("click", () => {
  const background = document.querySelector('body');
  
  background.classList.toggle('red');
  
});

themePick1.addEventListener("change", () => {
  const background = document.querySelector('body');
  
  background.classList.toggle('green');
  
});

themePick2.addEventListener("change", () => {
  const background = document.querySelector('body');
  
  background.classList.toggle('yellow');
  
});

themePick3.addEventListener("change", () => {
  const background = document.querySelector('body');
  
  background.classList.toggle('lime');
  
});


const letter = "Letter to my heart!";

const letterArray = letter.split(" ")

console.log(letterArray);

for(words in letterArray){
    let x = letterArray[words]
    x = "changes"
  console.log(x , words);
}

const random = ['tree', 795, [0, 1, 2]];
console.log(random[2][3])

// random.splice(random.indexOf(795), 1);
console.log("Loops \n=========================")


const data = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle'
const arr = data.split(',');
for (x in arr) { 
  console.log(arr[x])
}

const joined = arr.join(' ');
console.log(joined)

const list = document.querySelector('.output');
const totalBox = document.querySelector('.output');
let total = 0;
// list.innerHTML = '';
// totalBox.textContent = '';
const products = [
                'Underpants:6.99',
                'Socks:5.99',
                'T-shirt:14.99',
                'Trousers:31.99',
                'Shoes:23.99',
]

for (let x in products){
	 // number 3
   const product = products[x].split(":")

    const name = product[0]
    const price = Number(product[1])
    const itemText = `${name} — $${price}`;
    total += price;


  
  const listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);


totalBox.textContent = `Total: $${total.toFixed(2)}`;

}


let myArray = [ "Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri" ];

myArray.pop();
console.log(myArray);
