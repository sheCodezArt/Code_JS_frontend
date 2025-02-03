function checkTime() {
  let time = Number(prompt("Enter time in 24hrs clock"));

  if (time >= 6 && time <= 11) {
    alert(`Good morning! It is ${time}am`);
    document.body.style.background = "aqua";
    document.getElementById('skylight').style.background = "yellow";
    document.button.style.background = "transparent";
    document.button.style.color = "transparent";
  }
  else if (time > 11 && time <= 16) {
    alert(`Good afternoon! It is ${time}pm`);
    document.body.style.background = "blue";
    document.getElementById('skylight').style.background = "white";
    document.button.style.background = "transparent";
    document.button.style.color = "transparent";
  }
  else if (time > 16 && time <= 22) {
    alert(`Good evening! It is ${time}pm`);
    document.body.style.background = "blue";
    document.getElementById('skylight').style.background = "white";
    document.button.style.background = "transparent";
    document.button.style.color = "transparent";
  }
  else if ((time > 22 && time <= 24) || (time >= 1 && time <= 5)) {
    alert(`Good night! It is ${time}pm/am`);
    document.body.style.background = "blue";
    document.getElementById('skylight').style.background = "white";
    document.button.style.background = "transparent";
    document.button.style.color = "transparent";
  }
  else {
    alert("Invalid input! Reftesh and try again!");
  }
}