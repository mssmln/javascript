// Match Beginning String Patterns
let rickyAndCal = " Cal and Ricky both like racing.";
// the caret character down here is used to verify if 
// at index 0 Cal is present
// now it's false because Cal starts at index 1
let calRegex = /^Cal/;
let result = calRegex.test(rickyAndCal);
console.log(result);