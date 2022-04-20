// Ignore Case While Matching
// you might want to also match case differences.
// Case (or sometimes letter case) is the difference between uppercase letters and lowercase letters.
// You can match both cases using what is called a flag. 
// There are other flags but here you'll focus on the flag that ignores case - the i flag. 
// You can use it by appending it to the regex.
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; 
let result = fccRegex.test(myString);
console.log(result);