alert("There is a discount on the price of books. Enter your data to see if you're eligle for this offer");

let age = Number(prompt("How old are you?"));
let status = prompt("Are you a student? y/n");

status = status.toLowerCase();
let i = 0;

while(status !== "y" && status !== "n") {
  status = prompt("Invalid input! Enter valid input: y/n - ");
  
  i++;
}

if ((age <= 25 && age >= 1) && (status === "y")) {
  alert("You are eligible for the student discount");
}
else {
  alert("You are not eligible");
}

