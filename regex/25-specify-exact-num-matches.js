// Specify Exact Number of Matches
let timStr = "Timmmber";
// false because of 3 m
let timRegex = /Tim{4}ber/; 
let result = timRegex.test(timStr);
console.log(result);