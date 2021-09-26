// ----single element selector----

let element = document.getElementById("first");
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
element.style.color="red";
element.innerText ="i am happy";
element.innerHTML ="<b>i am happy</b>";
console.log(element);
console.log(element.innerText);

let sel = document.querySelector("#first");
sel = document.querySelector(".child");
sel = document.querySelector("div");
sel.style.color ="green";
console.log(sel );



// ----multi element selector----

let cl = document.getElementsByClassName("child");
cl= document.getElementsByClassName("container");
cl= document.getElementsByTagName("div")
console.log(cl);

Array.from(cl).forEach(element => {
    console.log(element);
    element.style.color = "blue";
    
});
// console.log(cl[0].getElementsByClassName("child"));
