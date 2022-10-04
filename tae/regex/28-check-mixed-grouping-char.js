// Check For Mixed Grouping of Characters
let myString = "Eleanor Roosevelt";
// .* for middle names
let myRegex = /(Franklin|Eleanor).*Roosevelt/;
let result = myRegex.test(myString); 
console.log(result);

/*
Your regex myRegex should return true for the string Franklin D. Roosevelt
Your regex myRegex should return true for the string Eleanor Roosevelt
Your regex myRegex should return false for the string Franklin Rosevelt
Your regex myRegex should return false for the string Frank Roosevelt
*/