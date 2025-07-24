
function greet(name) {
  return `Good morning, ${name}`;
}

function promptPopUp() {
  let userName = prompt("What is your name, please?");
  
  userName = userName.trim();
  
  document.getElementById('display').innerHTML = `Hello, ${userName}`;
  
  document.getElementById('display').style.color = "black";
  
  if (userName == null) {
    document.getElementById('display').innerHTML = `Hello, User`;
  }
}

function accessInputValue() {
  let userInput = document.getElementById('name').value;
  
  userInput = userInput.trim();
  
  document.getElementById('display').innerHTML = `Hello, ${userInput}`;
  
  document.getElementById('display').style.color = "black";
  
  if (userName == null) {
    document.getElementById('display').innerHTML = `Hello, user.`;
  }
}
