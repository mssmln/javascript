// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {
    const rn = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1
    };
    
    let r = 0;
    let rr = '';
    const a = [];
    const ar = [];
    
    for (const rom in rn) {
        if (num >= rn[rom]) {
            a.push(rn[rom]);
            ar.push(rom);
        }
    }
    
    let i = 0;
    loop1:
    for (const el of a) {
        while (r < num) {
            r += el;
            rr += ar[i];
            if (r > num) {
                r -= el;
                rr = rr.replace(RegExp(`${ar[i]}$`), '');
                i++;
                continue loop1;
            }
        }
    }
    return rr;
}

console.log(convertToRoman(10000000000));