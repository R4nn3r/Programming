let element = document.createElement('div');
element.className = "section_div";


let h1 = document.createElement('h1');
h1.innerHTML = 'Hello World!';

element.appendChild(h1);

const main = document.querySelector('.main');

main.appendChild(element);