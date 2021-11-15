let element = document.createElement('li');
let text = document.createTextNode('i am a text node');
element.appendChild(text);
//add a class name to the li element
element.className = 'childul';
element.id = 'createdLi'
element.setAttribute('title', 'mytitle');
//element.innerHTML ='<b>hello</b>'; // for only simple text you can use innerText
let ul = document.querySelector('ul.this');
ul.appendChild(element);
console.log(ul);
console.log(element);

let elem2 = document.createElement('h3');
elem2.id ='elem2';
elem2.className = 'elem2';
let tnode = document.createTextNode('this is a created node for elem2');
elem2.appendChild(tnode);

element.replaceWith(elem2);
let myul = document.getElementById('myul');
myul.replaceChild(element,document.getElementById('fui'));
myul.removeChild(document.getElementById('lui'));
let pr = elem2.getAttribute('class');
elem2.removeAttribute('id');
console.log(elem2, pr);
let po = elem2.hasAttribute('class');
elem2.setAttribute('title', 'myelem2title');
console.log(elem2, po);

//create a heading element with text as 'tocodewithlove' and create an a tag outside it with href = "ilovecoding.com"

let head = document.createElement('h1');
head.id = 'code';
head.setAttribute('title','code');
let t = document.createTextNode('to code with love ');

ul.appendChild(head)
head.appendChild(t);
console.log(head);
