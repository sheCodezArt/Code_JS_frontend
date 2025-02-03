
const email = prompt("Enter you email ID:");

let isValid = false;
let hasAtSymbol = false;

for (let i = 0; i < email.length; i++) {
  if (email[i] === '@') {
    alert(`${email} is a valid email id.`);
  }
  else {
    alert(`${email}is not a valid email id.`)
  }
}