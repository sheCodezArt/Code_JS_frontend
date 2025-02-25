

function toConsole() {
  let name = prompt("What is your name");
// alert('Great!');
  let age = Number(prompt("How old are you"));
  let location = prompt("Whwre do you live?");
// alertt("Welcome!");

  console.log(`Hello, ${name}, you are ${age}years old and you live in ${location}`);
}

function toPage() {
  let name = prompt("What is your name");
// alert('Great!');
  let age = Number(prompt("How old are you"));
  let location = prompt("Whwre do you live?");
// alertt("Welcome!");

  document.getElementById('show').innerHTML = `Hello, ${name}, you are ${age}years old and you live in ${location}`;
}

