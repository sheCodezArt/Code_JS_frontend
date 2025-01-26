// largest array element

// array setup function
function arraySetUp() {
  let n;

  // check input validity
  for (let attempts = 3; attempts > 0; attempts--) {
    n = Number(prompt(`Enter a valid input: `));
    if (!isNaN(n) && n > 0) {
      break;
    }
    alert(`Enter a valid positive number. You have ${attempts - 1} ${attempts > 1 ? "tries" : "try"} left.`);
  }

  if (isNaN(n) || n <= 0) {
    alert("Maximum attempts reached! Exiting...");
    return;
  }

  // create array
  let array = [];
  for (let i = 0; i < n; i++) {
    let element;
    while (true) {
      element = Number(prompt(`Enter element ${i+1}: `));
      if (!isNaN(element)) {
        break;
      }
      alert("Invalid! Try again.");
    }
    array.push(element);
  }
  //console.log(array);
  
  let max = array[0];
  for (let x = 1; x < n; x++) {
    if (array[x] > max) {
      max = array[x];
    }
  }
  //console.log(`${max} is the largest number in the array`);
  
  document.getElementById("display").innerHTML = `Your Array: ${array}`
    document.getElementById("display2").innerHTML = `Largest array element: ${max}`
  
}