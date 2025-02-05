function calculator(a, b, operator) {
  
  if (operator === "+") {
    return a+b;
  }
  else if (operator === "-") {
    return a-b;
  }
  else if (operator === "/" || operator === "÷") {
    return a/b;
  }
  else if (operator === "*" || operator === "x" || operator === "×") {
    return a*b;
  }
  else {
    alert("Invalid input! Refresh and try again");
    return;
  }
}

let number1 = Number(prompt("Enter a number:"));
let operator = prompt("Enter operator:");
let number2 = Number(prompt("Enter a second number:"));

let result = calculator(number1, number2, operator);

console.log(result);

