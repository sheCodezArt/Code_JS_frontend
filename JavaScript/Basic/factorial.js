function factorial(num) {
  let sum = 1;
  let logStr = '';
  for (let i = 1; i <= num; i++) {
    
    if (i == num) {
      logStr += `${i} = `;
    }
    else {
      logStr += `${i} ×  `;
    }
    
    sum *= i;
  }
  console.log(logStr);
  return sum;
}

let anyNum = Number(prompt("Choose a number whose factorial will be printed"));

let result = factorial(anyNum);

console.log(result);

