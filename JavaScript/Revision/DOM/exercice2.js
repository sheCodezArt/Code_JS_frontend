function stringCaseChanger(string) {
  let result = [];
  for (let i = 0; i < string.length; i++) {
    if (i % 2 == 0) {
      result.push(string[i].toLowerCase());
    }
    else {
      result.push(string[i].toUpperCase());
    }
  }
  return result.join('');
}

let userInput = prompt("Enter any string: ");
console.log(stringCaseChanger(userInput));
