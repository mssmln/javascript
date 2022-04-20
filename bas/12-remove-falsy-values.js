// Falsy Bouncer
function bouncer(arr) {

    /*let ar = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) {
        ar.push(arr[i]);
      }
    }
    return ar;*/

    return arr.filter(el => el);

    return arr.filter(el => !!el);

    return arr.filter(Boolean);  
}
  
console.log(bouncer([7, "ate", "", false, 9]));

/*
Value	Description
false	The keyword false.
0	The Number zero (so, also 0.0, etc., and 0x0).
-0	The Number negative zero (so, also -0.0, etc., and -0x0).
0n	The BigInt zero (so, also 0x0n). Note that there is no BigInt negative zero — the negation of 0n is 0n.
"", '', ``	Empty string value.
null	null — the absence of any value.
undefined	undefined — the primitive value.
NaN	NaN — not a number.
document.all	Objects are falsy if and only if they have the [[IsHTMLDDA]] internal slot.That slot only exists in document.all and cannot be set using JavaScript.
*/