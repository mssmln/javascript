// Use the parseInt Function
function convertToInteger(str) {
    return parseInt(str);
}
  
console.log(convertToInteger("56"));


// Use the parseInt Function with a Radix
// the radix specifies the base of the number in the string
// it can be an integer between 2 and 36
function convertToInteger1(str) {
    return parseInt(str, 2);
}
  
console.log(convertToInteger1("10011"));