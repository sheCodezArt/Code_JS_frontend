function welcome() {
  const name = prompt("What is your name?");

  document.getElementById("show").innerHTML = `Welcome ${name}!`;
}