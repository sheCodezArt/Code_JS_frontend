// Guess the number Game

function guess() {
  let number = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

  let userguess = getValidNumber("Guess the number (1-100):");

  if (userguess == number) {
    alert("You win");
  }
  else if (userguess > number) {
    let sub = userguess - number;

    alert(`Sorry, the number you entered is ${sub} more than the actual number`);

    userguess = getValidNumber("Guess again:");

    if (userguess != number) {
      alert(`You lose! The number is ${number}`);
    }
    else {
      alert("You win");
    }
  }
  else {
    let add = number - userguess;

    alert(`Sorry, the number you entered is ${add} less than the actual number`);

    userguess = getValidNumber("Guess again:");

    if (userguess != number) {
      alert(`You lose! The number is ${number}`);
    }
    else {
      alert("You win");
    }
  }
}

// Helper function to validate and ensure input is a number
function getValidNumber(message) {
  let input;
  do {
    input = prompt(message);
  } while (isNaN(input) || input.trim() === "");
  return Number(input);
}