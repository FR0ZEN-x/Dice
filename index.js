let x;
let y;
let z;
let min;
let max;

document.getElementById(`botton5`).onclick = function(){
    min = Number(document.getElementById(`min`).value);
    max = Number(document.getElementById(`max`).value);
}

document.getElementById(`button1`).onclick = function(){
    x = Math.floor(Math.random()*max) + min;
    dice1.innerHTML = x;
    sum.textContent = (`Sum of Dices : ${x}`);
    sub.textContent = (`Sub of Dices : ${x}`);
    mul.textContent = (`Mul of Dices : ${x}`);
    div.textContent = (`Div of Dices : ${x}`);}

document.getElementById(`button2`).onclick = function(){
    x = Math.floor(Math.random()*max) + min;
    y = Math.floor(Math.random()*max) + min;
    dice1.innerHTML = x;
    dice2.innerHTML = y;
    sum.textContent = (`Sum of Dices : ${x+y}`);
    sub.textContent = (`Sub of Dices : ${x-y}`);
    mul.textContent = (`Mul of Dices : ${x*y}`);
    div.textContent = (`Div of Dices : ${x/y}`);
}

document.getElementById(`button3`).onclick = function(){
    x = Math.floor(Math.random()*max) + min;
    y = Math.floor(Math.random()*max) + min;
    z = Math.floor(Math.random()*max) + min;
    dice1.innerHTML = x;
    dice2.innerHTML = y;
    dice3.innerHTML = z;
    sum.textContent = (`Sum of Dices : ${x+y+z}`);
    sub.textContent = (`Sub of Dices : ${x-y-z}`);
    mul.textContent = (`Mul of Dices : ${x*y*z}`);
    div.textContent = (`Div of Dices : ${(z/y)/x}`);
}

document.getElementById(`button4`).onclick = function(){
    dice1.innerHTML = 0;
    dice2.innerHTML = 0;
    dice3.innerHTML = 0;
    (document.getElementById(`min`).value) = 0;
    (document.getElementById(`max`).value) = 0;
    sum.textContent = (`Sum of Dices : 0`);
    sub.textContent = (`Sub of Dices : 0`);
    mul.textContent = (`Mul of Dices : 0`);
    div.textContent = (`Div of Dices : 0`);
}