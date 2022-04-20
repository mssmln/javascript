// Match Single Character with Multiple Possibilities
// Character classes allow you to define a group of characters you wish to match by placing them inside []
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// troviamo tutte le vocali g ignorando il letter case i 
let vowelRegex = /[aeiou]/gi; 
let result = quoteSample.match(vowelRegex); 
console.log(result);
// non applicabile il test method perchè ritorna un bool e noi vogliamo l'elenco delle vocali
console.log(vowelRegex.test(quoteSample));