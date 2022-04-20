// Reverse a String
function reverseString(str) {
    let newStr = "";
    for (let i = str.length -1; i > -1; i--) {
      newStr += str[i];
    }
    return newStr;
}
  
console.log(reverseString("loop"));


function reverseString1(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString1("methods"));


function reverseString2(str) {
    // I chose slice because substr is deprecated
    // The depth of the recursion is equal to the length of the string
    return str === '' ? '' : reverseString2(str.slice(1)) + str.charAt(0);
}
  
console.log(reverseString2("Hello"));

/*
        	                                      reverseString(str.subst(1))     + str.charAt(0)
1st call - reverseString("Hello")   will return   reverseString("ello")           + "h"
2nd call - reverseString("ello")    will return   reverseString("llo")            + "e"
3rd call - reverseString("llo")     will return   reverseString("lo")             + "l"
4th call - reverseString("lo")      will return   reverseString("o")              + "l"
5th call - reverseString("o")       will return   reverseString("")               + "o"
6th call - condition is met

5th call will return reverseString("") + "o" = "o"
4th call will return reverseString("o") + "l" = "o" + "l"
3rd call will return reverseString("lo") + "l" = "o" + "l" + "l"
2nd call will return reverserString("llo") + "e" = "o" + "l" + "l" + "e"
1st call will return reverserString("ello") + "h" = "o" + "l" + "l" + "e" + "h" 

*/