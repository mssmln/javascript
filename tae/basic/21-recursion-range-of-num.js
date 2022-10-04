// Use Recursion to Create a Range of Numbers
function rangeOfNumbers(startNum, endNum) {
  return startNum > endNum 
    ? []
    : [startNum, ...rangeOfNumbers(startNum + 1, endNum)];
}
console.log(rangeOfNumbers(3, 10));
  

function rangeOfNumbers1(startNum, endNum) {
  return startNum > endNum 
    ? [] 
    : [startNum].concat(rangeOfNumbers1(startNum + 1, endNum));
}
console.log(rangeOfNumbers1(3, 10));
  
  
function rangeOfNumbers2(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var numbers = rangeOfNumbers2(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
console.log(rangeOfNumbers2(3, 10));
  
  
function rangeOfNumbers3(startNum, endNum) {
  return startNum === endNum 
    ? [startNum] 
    : rangeOfNumbers3(startNum, endNum - 1).concat(endNum); 
}
console.log(rangeOfNumbers3(3, 10));
    
  
function rangeOfNumbers4(startNum, endNum) {
  return startNum === endNum
    ? [startNum]
    : [...rangeOfNumbers4(startNum, endNum - 1), endNum];
}
console.log(rangeOfNumbers4(3, 10));

/*
1 call f(3,9)
2 call f(3,8)
3 call f(3,7)
4 call f(3,6)
5 call f(3,5)
6 call f(3,4)
7 call f(3,3)
8 call return [3] since startNum === endNum

7 call ... 3
6 call ... 4
1 call ... 9
*/
  

function rangeOfNumbers5(startNum, endNum) {
  const arr = [];
  while (startNum <= endNum) {
    arr.push(startNum);
    startNum++;
  }
  return arr;
}
console.log(rangeOfNumbers5(3, 10));