// Reverse array function
function arraySetUp() {
  // Prompt user for the number of elements
  let n = Number(prompt("Enter the number of elements: "));
  let attempts = 3;

  // Validate the input (positive number)
  while ((isNaN(n) || n <= 0) && attempts > 1) {
    attempts--;
    alert(`Please enter a valid positive number. You have ${attempts} ${attempts > 1 ? "tries" : "try"} left.`);
    n = Number(prompt("Enter the number of elements: "));
  }

  if (isNaN(n) || n <= 0) {
    alert("No valid input provided. Exiting...");
    return;
  }

  // Initialize the array
  let array = [];

  // Function to accept array inputs
  function acceptInput() {
    for (let i = 0; i < n; i++) {
      let element = Number(prompt(`Enter element ${i + 1}:`));
      if (!isNaN(element)) {
        array.push(element);
      }
      else {
        alert("Invalid input. Please enter a number.");
        i--; // Retry the current iteration
      }
    }

    // Display the entered array and the reversed array
    /*console.log("The elements you entered are:", array);
    array.reverse();
    console.log("The reversed array is:", array);*/

    document.getElementById("display").innerHTML = `Original Array: ${array}`
    document.getElementById("display2").innerHTML = `Reversed Array: ${array.reverse()}`
    /*`
      <p>Original Array: ${array.slice().reverse().join(", ")}</p>
      <p>Reversed Array: ${array.join(", ")}</p>
    `;*/
  }

  acceptInput();
}