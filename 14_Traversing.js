let cont = document.querySelector('.no');
 cont = document.querySelector('.container');
console.log(cont.childNodes);
console.log(cont.children); //if you are dealing only with elements
let nodeName = cont.childNodes[1].nodeName;
let nodeType = cont.childNodes[1].nodeType;
console.log(nodeName);
console.log(nodeType);

// //node types

// 1. Element
// 2. Attribute
// 3. Text node
// 8. Comment
// 9. document
// 10. docType

let container = document.querySelector('div.container');
console.log(container.children[1].children[0].children);
console.log(container.firstChild);
console.log(container.firstElementChild);
console.log(container.lastChild);
console.log(container.lastElementChild);
console.log(container.childElementCount);
console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);