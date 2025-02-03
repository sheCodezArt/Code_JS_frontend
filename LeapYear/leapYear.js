let userInput = Number(prompt("Enter any year to check if it's a leap year"));

if ((userInput % 4 == 0 && userInput % 100 != 0) || (userInput % 400 == 0)) {
  document.getElementById("one").innerHTML = `${userInput}`;
  document.getElementById("two").innerHTML = "It is a Leap Year";
}

else {
  document.getElementById("one").innerHTML = `${userInput}`;
  document.getElementById("two").innerHTML = "It is not a Leap Year";
}