let light = '';
let random = 0;

  random = Math.floor(Math.random() * 3);
  if (random == 0) {
    light = prompt("The red light stands for: ");
    light = light.toLowerCase();
    if (light === "stop") {
      document.getElementById('div1').style.background = "red";
    }
    else {
      alert("Invalid input");
    }
  }
  else if (random == 1) {
    light = prompt("The orange light stands for: ");
    light = light.toLowerCase();
    if (light === "ready") {
      document.getElementById('div2').style.background = "orange";
    }
    else {
      alert("Invalid input");
    }
  }
  else {
    light = prompt("The green light stands for: ");
    light = light.toLowerCase();
    if (light === "go") {
      document.getElementById('div3').style.background = "green";
    }
    else {
      alert("Invalid input");
    }
  }


