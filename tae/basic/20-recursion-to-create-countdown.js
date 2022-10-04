// Use Recursion to Create a Countdown
function countdown1(n) {
  if(n < 1) {
    return [];
  } else { 
    const count = countdown1(n - 1);
    count.unshift(n);
    return count;
  }
}
console.log(countdown1(10));


function countdown2(n) {
  if (n < 1) { 
    return [];
  } else {
    const arr = countdown2(n - 1);
    arr.splice(0, 0, n);
    return arr;
  }
}
console.log(countdown2(10));


function countdown3(n) {
  return n < 1 ? [] : [n].concat(countdown3(n - 1));
  // [10].concat(9).concat(8).concat(7).concat(6) etc
}
console.log(countdown3(10));


function countdown4(n) {
  return n < 1 ? [] : [n, ...countdown4(n - 1)];
}
console.log(countdown4(10));


function countdown(n) {
  if(n < 1) {
    return [];
  } else {
    const count = [];
    for (let i = n; i >= 1; i--) {
      count.push(i);
    }
    return count;
  }
}
console.log(countdown(10));