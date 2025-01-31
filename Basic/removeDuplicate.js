let array = [2, 4, 6, 7, 8, 7, 1];

document.getElementById('display').innerHTML = `Original Array: ${array}`;

function remDuplicate() {
  // Create a new array with only unique elements
  let uniqueArray = [...new Set(array)];
  
  // Update the original array
  array = uniqueArray;

  // Display the updated array
  document.getElementById('display2').innerHTML = `Current Array: ${array}`;
}