// Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
  // return num > 0 ? str.repeat(num) : "";

  return num < 1 ? "" : str.concat(...new Array(num - 1).fill(str));
}
  
console.log(repeatStringNumTimes("abc", 3));


function repeatStringNumTimes1(str, num) {
  let accumulatedStr = "";
  for (let i = 0; i < num; i++) {
    accumulatedStr += str;
  }
  return accumulatedStr;
}

console.log(repeatStringNumTimes1("abcd", 3));


function repeatStringNumTimes2(str, num) {
  if (num < 1) {
    return "";
  } else {
    return str + repeatStringNumTimes2(str, num - 1);
  }
}

console.log(repeatStringNumTimes2("abcde", 3));

/*
1 call abcde + (abcde, 2)
2 call abcdeabcde + (abcde, 1)
3 call abcdeabdceabdce + (abcde, 0)
*/