// Match All Letters and Numbers
let quoteSample = "The five boxing wizards jump quickly.";
// shortcut for /[a-zA-Z]/g in this scenario
// but \w also includes other characters -> [A-Za-z0-9_]
let alphabetRegexV2 = /\w/g; 
let result = quoteSample.match(alphabetRegexV2).length;
// spaces and dot are left out
console.log(result);