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


const name = "string";
const age = 22;


const tagline = 'MDN - Resources for developers, by developers';
