let listOfNames = ["Sarah", "Katy", "Eleanor", "Mary", "Anne", "Carry", "Bennie"];

let scores = [77, 64, 59, 55, 53, 49, 47];

function getIndex(element) {
  
  for (let i = 0; i < listOfNames.length; i++) {
    if (element === listOfNames[i]) {
      return i;
    }
  }
  return -1;
}

function grade(index) {
  
  const outcome = document.getElementById("display");
  
  let gradeText = "";
  
  if (scores[index] >= 90 && scores[index] <= 100) {
    gradeText = ": You got an A";
  }
  else if (scores[index] >= 80 && scores[index] <= 89) {
    gradeText = ": You got a B";
  }
  else if (scores[index] >= 70 && scores[index] <= 79) {
    gradeText = ": You got a C";
  }
  else if (scores[index] >= 60 && scores[index] <= 69) {
    gradeText = ": You got a D";
  }
  else if (scores[index] < 60) {
    gradeText = ": You got an E";
  }
  else {
    gradeText = ": ABS - Missing reports";
  }
  
  outcome.innerHTML += gradeText;
}

function checkName() {
  let name = prompt("Your name is: ");
  
  while (name.length == 0) {
    name = prompt("Sorry, you entered an empty string. Try Again");
  }
  
  let index = getIndex(name);
  
    if (index !== -1) {
     document.getElementById("display").innerHTML = `Name: ${listOfNames[index]} <br> Score: ${scores[index]} <br>`;
      grade(index);
    }
    else {
  document.getElementById("display").innerHTML = "Name not found";
    }
}
