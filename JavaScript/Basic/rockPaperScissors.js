// rock paper scissors

function rock() {
  let userChoice = "Rock";
  
  let compChoice = Math.floor(Math.random() * 3) + 1;
  
  if (compChoice == 1) {
    alert("Computer chose Rock! It's a Tie!");
  }
  else if (compChoice == 2) {
    alert("Computer chose Paper! You lose");
  }
  else {
    alert("Computer chose scissors! You win");
  }
}

function paper() {
  let userChoice = "Paper";
  
  let compChoice = Math.floor(Math.random() * 3) + 1;
  
  if (compChoice == 1) {
    alert("Computer chose Rock! You win!");
  }
  else if (compChoice == 2) {
    alert("Computer chose Paper! It's a Tie!");
  }
  else {
    alert("Computer chose scissors! You lose!");
  }
}

function scissors() {
  let userChoice = "Scissors";
  
  let compChoice = Math.floor(Math.random() * 3) + 1;
  
  if (compChoice == 1) {
    alert("Computer chose Rock! You lose!");
  }
  else if (compChoice == 2) {
    alert("Computer chose Paper! You win!");
  }
  else {
    alert("Computer chose scissors! It's a Tie!");
  }
}

