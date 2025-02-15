
class Character {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.patientRegistry = new PatientRegistry();
  }

  checkRegisteredPatients() {
    this.patientRegistry.checkRegisteredPatients();
  }
}

class PatientRegistry {
  constructor() {
    this.register = [
      "Anna",
      "Adam",
      "Ben",
      "Bjourn",
      "Carry",
      "Canon",
      "Danis",
      "Deborah",
      "Javier",
      "Jennifer",
      "Kai",
      "Kendrix",
      "Martin",
      "Maya",
    ];
  }

  checkRegisteredPatients() {
    let userName = prompt("What is your name?");
    if (this.register.includes(userName)) {
      alert(`Welcome, ${userName}!`);
    }
    else {
      let answer = prompt("Your name is not in our records. Do you wish to register? (y/n)").toLowerCase().trim();
      if (answer === "y") {
        this.registerPatient();
      }
      else if (answer === "n") {
        alert("Have a great day!");
      }
      else {
        alert("Invalid input!");
      }
    }
  }

  registerPatient() {
    let newPatients = Number(prompt("How many patients are registering?"));
    for (let i = 0; i < newPatients; i++) {
      let patientName = prompt(`Enter the name of patient ${i + 1}:`);
      this.register.push(patientName);
    }
    console.log("Updated patient list:");
    for (let i = 0; i < this.register.length; i++) {
      console.log(`Patient ${i + 1}: ${this.register[i]}`);
    }
    let confirm = prompt("Are all names successfully added? (y/n)").toLowerCase().trim();
    if (confirm === "y") {
      alert("Thank you! We may proceed!");
      this.checkHealthStatus();
    }
    else if (confirm === "n") {
      let correctNum = Number(prompt("How many more patients need to register?"));
      for (let x = 0; x < correctNum; x++) {
        let patientName = prompt("Enter your name:");
        this.register.push(patientName);
      }
      this.checkHealthStatus();
    }
    else {
      alert("Invalid input! Refresh and try again!");
    }
  }

  checkHealthStatus() {
    let userAge = Number(prompt("How old are you?"));
    if (userAge < 18) {
      alert("You are too young and vulnerable to the pandemic!");
    }
    else if (userAge >= 18 && userAge <= 40) {
      alert("You have a strong immune system and are more likely to recover.");
    }
    else {
      alert("You are elderly and at higher risk.");
    }
  }
}


let character = new Character("John Doe", 30);
character.checkRegisteredPatients();


