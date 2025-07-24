let array = [];

let n = Number(prompt("Enter the number of elements you desire in this array. Feel free to repeat numbers as this game is to remove repeated numbers: "));

for (let i = 0; i < n; i++) {

  let eachElement = Number(prompt(`Element ${i} is: `));
  array.push(eachElement);

}

document.getElementById('display').innerHTML = `Original Array: ${array}`;

function remDuplicate() {
  // Create a new array with only unique elements
  let uniqueArray = [...new Set(array)];
  
  // Update the original array
  array = uniqueArray;

  // Display the updated array
  document.getElementById('display2').innerHTML = `Current Array: ${array}`;
}