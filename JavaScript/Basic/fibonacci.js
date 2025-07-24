function fibonacci(fromNum, limitNum) {
  let prevNum = 0;
  let currNum = fromNum;
  console.log(prevNum);
  console.log(currNum);
  
  for (let i = 2; i <= limitNum; i++) {
    let nextNum = prevNum + currNum;
    prevNum = currNum;
    currNum = nextNum;
    
    console.log(nextNum);
  }
}

fibonacci(1, 3);


