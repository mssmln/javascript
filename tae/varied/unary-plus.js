// we use unary plus to convert to a num as toFixed returns a string
if ( +(1.1 + 1.3).toFixed(2) !== 2.4) console.log(true);

console.log((1.1 + 1.3).toFixed(2));
console.log(typeof +("3"));