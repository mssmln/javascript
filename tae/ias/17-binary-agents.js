// Binary Agents
// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.
/*
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") should return the string Aren't bonfires fun!?
binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") should return the string I love FreeCodeCamp!
*/

function binaryAgent(str) {
    return str.split(" ").map(el => String.fromCharCode(parseInt(el, 2))).join("");

    // 1 fcc solution
    var biString = str.split(" ");
    var uniString = [];
    for (var i = 0; i < biString.length; i++) {
        uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
    }
    return uniString.join("");

    // 2 fcc solution
    str = str.split(" ");
    var power;
    var decValue = 0;
    var sentence = "";
    // Check each binary number from the array.
    for (var s = 0; s < str.length; s++) {
        // Check each bit from binary number
        for (var t = 0; t < str[s].length; t++) {
            // This only takes into consideration the active ones.
            if (str[s][t] == 1) {
                // This is quivalent to 2 ** position
                power = Math.pow(2, +str[s].length - t - 1);
                decValue += power;
                // Record the decimal value by adding the number to the previous one.
            }
        }
        // After the binary number is converted to decimal, convert it to string and store
        sentence += String.fromCharCode(decValue);
        // Reset decimal value for next binary number.
        decValue = 0;
    }
    return sentence;

    // 3 fcc solution
    return String.fromCharCode(...str.split(" ").map(function(char) {
        return parseInt(char, 2);
    }));
}
  
console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));