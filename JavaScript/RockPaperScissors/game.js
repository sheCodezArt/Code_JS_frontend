let choice = prompt("Do you wnat to play with computer ot partner? c/p");

choice = choice.toLowerCase();

if (choice === "c") {
  withComputer();
}
else if (choice === "p") {
  withPartner();
}
else {
  invalidInput();
}

function invalidInput() {
  let i = 3
  
  while (i > 0) {
    let trial = i > 1 ? `${i} tries` : `${i} try`;
    
    choice = prompt(`Invalid Input! You have ${trial} left Try again:`);
    
     if (choice === "c" || choice === "p") {
       return choice;
     }
     
    i--;
  }
  alert("You have exceeded your limit! Refresh page and try again");
  return null;
}


function withComputer() {
  
  function rock() {
   let computerChoice = Math.floor(Math.random() * 3);
   
  if (computerChoice == 0) {
    alert("It's a Tie!");
  }
  else if (computerChoice == 1) {
    alert("You lose!");
  }
  else {
    alert("You win!");
  }
}

function paper() {
  let computerChoice = Math.floor(Math.random() * 3);
  
  if (computerChoice == 0) {
    alert("You win!");
  }
  else if (computerChoice == 1) {
    alert("It's a Tie!");
  }
  else {
    alert("You lose!");
  }
}

function scissors() {
  let computerChoice = Math.floor(Math.random() * 3);
  
  if (computerChoice == 0) {
    alert("You lose!");
  }
  else if (computerChoice == 1) {
    alert("You win!");
  }
  else {
    alert("It's a Tie!");
  }
}

document.getElementById('rock').addEventListener('click', () => {
  rock();
});

document.getElementById('paper').addEventListener('click', () => {
  paper();
});

document.getElementById('scissors').addEventListener('click', () => {
  scissors();
});

}

// As I improve

function withPartner() {
  
}


