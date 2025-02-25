// // Reverse array function
// function arraySetUp() {
//   // Prompt user for the number of elements
//   let n = Number(prompt("Enter the number of elements: "));
//   let attempts = 3;

//   // Validate the input (positive number)
//   while ((isNaN(n) || n <= 0) && attempts > 1) {
//     attempts--;
//     alert(`Please enter a valid positive number. You have ${attempts} ${attempts > 1 ? "tries" : "try"} left.`);
//     n = Number(prompt("Enter the number of elements: "));
//   }

//   if (isNaN(n) || n <= 0) {
//     alert("No valid input provided. Exiting...");
//     return;
//   }

//   // Initialize the array
//   let array = [];

//   // Function to accept array inputs
//   function acceptInput() {
//     for (let i = 0; i < n; i++) {
//       let element = Number(prompt(`Enter element ${i + 1}:`));
//       if (!isNaN(element)) {
//         array.push(element);
//       }
//       else {
//         alert("Invalid input. Please enter a number.");
//         i--; // Retry the current iteration
//       }
//     }

//     document.getElementById("display").innerHTML = `Original Array: ${array}`

//     let response = Number(prompt("Would you want to reverse or (1)arrange this (2)array?"));

//     if (response == 1) {
//       document.getElementById("display2").innerHTML = `Reversed Array: ${array.reverse()}`;
//     }
//     else if (response == 2) {
//       let arrange = Number(prompt("You wanna arrange the array in (1)ascending or (2)descending order?"));

//       if (arrange == 1) {
//         document.getElementById("display2").innerHTML = `Arranged Array: ${array.sort()}`
//       }
//       else (arrange == 2) {
//         document.getElementById("display2").innerHTML = `Arranged Array: ${array.sort((a, b) => b - a)}`;
//       }
//       else {
//         alert("INVALID INPUT");
//       }
//     }
//     else {
//       alert("INVALID INPUT");
//     }

//     // Display the entered array and the reversed array
//     /*console.log("The elements you entered are:", array);
//     array.reverse();
//     console.log("The reversed array is:", array);*/

//     /*`
//       <p>Original Array: ${array.slice().reverse().join(", ")}</p>
//       <p>Reversed Array: ${array.join(", ")}</p>
//     `;*/
//   }

//   acceptInput();
// }


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
      } else {  
        alert("Invalid input. Please enter a number.");  
        i--; // Retry the current iteration  
      }  
    }  

    document.getElementById("display").innerHTML = `Original Array: ${array}`;  

    let response = Number(prompt("Would you want to (1)reverse or (2)arrange this array?"));  

    if (response == 1) {  
      document.getElementById("display2").innerHTML = `Reversed Array: ${array.slice().reverse()}`;  
    }
    else if (response == 2) {  
      let arrange = Number(prompt("You wanna arrange the array in (1)ascending order or (2)descending order?"));  

      if (arrange == 1) {  
        document.getElementById("display2").innerHTML = `Arranged Array: ${array.sort((a, b) => a - b)}`;  
      }
      else if (arrange == 2) {  
        document.getElementById("display2").innerHTML = `Arranged Array: ${array.sort((a, b) => b - a)}`;  
      }
      else {  
        alert("INVALID INPUT");  
      }  
    }
    else {  
      alert("INVALID INPUT");  
    }  
  }  

  acceptInput();  
}