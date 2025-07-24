function userInput() {
  let time = '';

  let tries = 3;
  let lastTwoChars = '';
  let i = tries;

  while (i >= 0) {
    time = prompt("What is the time, please?");

    if (time.length > 4 || time.length < 3) {
      alert("Wrong format! Enter time like: 11AM");
    }
    else {
      lastTwoChars = time.slice(-2).toLocaleUpperCase();
      if (lastTwoChars === "AM") {
        document.getElementById("show").innerHTML = "Good Morning";
        break;
      }
      else if (lastTwoChars === "PM") {
        document.getElementById("show").innerHTML = "Good Afternoon/Evening";
        break;
      }
      else {
        alert("Wrong format! Enter time like: 11AM");
      }
    }
    i--;
    if (i == 1) {
      alert(`You have ${i} try remaining`);
    }
    else {
    alert(`You have ${i} tries remaining`);
   }
  }
}

function manual() {
  let time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  if (hours >= 0 && hours < 12) {
    document.getElementById("show").innerHTML = "Good Morning";
  }
  else if (hours >= 12 && hours < 17) {
    document.getElementById("show").innerHTML = "Good Afternoon";
  }
  else {
    document.getElementById("show").innerHTML = "Good Evening";
  }
}

