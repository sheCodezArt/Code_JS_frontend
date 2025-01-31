alert("You are to click the first button and enter your age in figures in the popup");

let age = 0;

function enter() {
  age = Number(prompt("Your age is: "));
  
  document.getElementById("display").innerHTML = age;
}

function confirm() {
  if (age >= 1 && age <= 3) {
    document.getElementById("display").innerHTML = "You are a toddler";
  }
  else if (age > 3 && age <= 5) {
    document.getElementById("display").innerHTML = "You are a preschooler";
  }
  else if (age > 5 && age <= 12) {
    document.getElementById("display").innerHTML = "You are a child";
  }
  else if (age > 12 && age <= 18) {
    document.getElementById("display").innerHTML = "You are a teenager/an adolescent";
  }
  else if (age > 10 && age <= 30) {
    document.getElementById("display").innerHTML = "You are a youth/young adult";
  }
  else if (age > 30 && age <= 50) {
    document.getElementById("display").innerHTML = "You are an adult";
  }
  else if (age > 50 && age <= 69) {
    document.getElementById("display").innerHTML = "You are an hexagenerian";
  }
  else if (age > 69 && age <= 79) {
    document.getElementById("display").innerHTML = "You are an hepagenerian";
  }
  else if (age > 79 && age <= 89) {
    document.getElementById("display").innerHTML = "You are an octagenerian";
  }
  else if (age > 89 && age <= 99) {
    document.getElementById("display").innerHTML = "You are an nonagenerian";
  }
  else {
    document.getElementById("display").innerHTML = "You are a senior citizen";
  }
}