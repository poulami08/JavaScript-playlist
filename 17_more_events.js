 let btn = document.getElementById('btn');
 btn.addEventListener('click',func1);
 btn.addEventListener('mousedown',func3);
 btn.addEventListener('dblclick',func2);
 function func1(e) {
     console.log("thanks",e);
     e.preventDefault(); //to bypass any default behaviour
 }

 function func2(e) {
     console.log("thanks thanks",e);
    e.preventDefault(); //to bypass any default behaviour
 }

function func3(e) {
     console.log("thanks its mouse down",e);
    e.preventDefault(); //to bypass any default behaviour
}

document.querySelector('.no').addEventListener('mouseenter',function(){
    cousole.log('you entered no');

});

document.querySelector('.no').addEventListener('mouseleave',function(){
    cousole.log('you exited no');

});
document.querySelector('.container').addEventListener('mousemove',function(){
    console.log(e.offsetX,e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetX}, ${e.offsetY},54)`;
    cousole.log('you ');

});

