let num1 = document.getElementById('num1').value;
let num2 = document.getElementById('num2').value;

num1 = Number(num1);
num2 = Number(num2);


function add() {
  document.getElementById('display').innerHTML = num1+num2;
}

function sub() {
  document.getElementById('display').innerHTML = num1-num2;
}

function mul() {
  document.getElementById('display').innerHTML = num1*num2;
}

function div() {
  document.getElementById('display').innerHTML = num1/num2;
}