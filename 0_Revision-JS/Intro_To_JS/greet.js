function userInput() {
  let time = '';

  let tries = 3;
  let lastTwoChars = '';
  let i = tries;

  while (i <= 0) {
    time = prompt("What is the time, please?");

    if (time.length > 4 || time.length < 3) {
      alert("Wrong format! Enter time like: 11AM");
    }
    alert(`You have ${i} tries remaining`);
    i--;
  }
}