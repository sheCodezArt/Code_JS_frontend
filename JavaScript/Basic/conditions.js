// Create a simple JS program that checks if a number is greater than user's age and tell if user is a child, youth or an adult
function ageGroup() {
const age = Number(prompt("How old are you?"));

if (age > 1 && age < 18) {
  console.log("You are a child");
}
else if (age >= 18 && age < 30) {
  console.log("You are a youth");
}
else if (age > 29 && age < 50) {
  console.log("You are an adult");
}
else {
  console.log("You're a senior cituzen!");
}

alert("Check the console");

}


// Alert instead
function findAgeGroup() {
const age = Number(prompt("How old are you?"));

if (age > 1 && age < 18) {
  alert("You are a child");
}
else if (age >= 18 && age < 30) {
  alert("You are a youth");
}
else if (age > 29 && age < 50) {
  alert("You are an adult");
}
else {
  alert("You're a senior citizen!");
}
}