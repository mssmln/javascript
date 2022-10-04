// Switch Statements
function caseInSwitch(val) {
  switch (val) {
    case 1:
      return "alpha";
    case 2:
      return "beta";
    case 3:
      return "gamma";
    case 4:
      return "delta";
  }
}
  
console.log(caseInSwitch(1));


function caseInSwitch1(val) {
  let answer = "";
  
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  return answer;
}

console.log(caseInSwitch1(2));


// Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
  switch (val) {
    case 1:
    case 2:
    case 3:
      return "Low";
    case 4:
    case 5:
    case 6:
      return "Mid";
    case 7:
    case 8:
    case 9:
      return "High";
  }
}

console.log(sequentialSizes(3));