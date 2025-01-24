// Guess the number Game

function guess() {
  let number = Math.floor(Math.random * (100 - 1 + 1)) + 1;
  
  const userguess = Number(prompt("The number is: "));
  
  if (userguess == number) {
    alert("You win");
  }
  else if (userguess > number) {
    let sub = userguess - number;
    
    alert("Sorry the number you entered is `${sub}` more than the actual number");
    
    userguess = prompt("Guess again: ");
    
    if (userguess != number) {
      alert("You lose! The number is `${number}`");
    }
  }
  else {
    let add = number - userguess;
    
    alert("Sorry, the number you entered is `${add}` less than the actual number");
    
    userguess = prompt("Guess again: ");
    
    if (userguess != number) {
      alert("You lose! The number is `${number}`");
    }
  }
}