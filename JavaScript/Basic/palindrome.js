function palindrome() {
  let element = prompt("Enter a string:");
  let logStr = '';
  
  for (let i = element.length-1; i >= 0; i--) {
    logStr += `${element[i]}`;
  }
  console.log(logStr);
  if (logStr === element) {
    alert(`${element} is a palindrome`);
  }
  else {
    alert(`${element} is not a palindrome`);
  }
}

palindrome();

