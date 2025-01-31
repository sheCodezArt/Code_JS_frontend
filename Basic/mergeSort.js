// arrays
let array1 = [4, 3, 8, 1, 9, 6];
let array2 = [5, 7, 2, 12, 11];
let array3 = [10, 14, 17, 14, 0];

// merge function
function merge(arr1, arr2, arr3) {
  // method 1 - Using the concat method
  // array1.concat(array2, array3);
  
  // method 2 - spread operator
  // let mergedArray = [...array1...array2...array3];
  
  // method 3 - using Array.prototype.push.apply()
  // Array.prototype.push.apply();
  
  // method 3 - using loop
  for (let item in arr2) {
    arr1.push(arr2[item]);
  }
  for (let item in arr3) {
    arr1.push(arr3[item]);
  }
  return arr1;
}

let mergedArray = merge(array1, array2, array3);

console.log(mergedArray);