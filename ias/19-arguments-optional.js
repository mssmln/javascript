// Arguments Optional
/*
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
Calling this returned function with a single argument will then return the sum:
var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.
If either argument isn't a valid number, return undefined.

addTogether(2, 3) should return 5.
addTogether(23, 30) should return 53.
addTogether(5)(7) should return 12.
addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ") should return undefined.
addTogether(2, "3") should return undefined.
addTogether(2)([3]) should return undefined.
addTogether("2", 3) should return undefined.
addTogether(5, undefined) should return undefined.
*/

function addTogether(...args) {
    const number = 'number';
    const validNum = x => typeof x === number;
    return args.length === 2 && validNum(args[0]) && validNum(args[1])
      ? args[0] + args[1] 
      : args.length === 1 && validNum(args[0])
        ? y => validNum(y) ? y + args[0] : undefined
        : undefined

    // 1 fcc solution
    const [first, second] = args;
    if (typeof(first) !== "number")
        return undefined;
    if (arguments.length === 1)
        return (second) => addTogether(first, second);
    if (typeof(second) !== "number")
        return undefined;
    return first + second;

    // 2 fcc solution
    const [first, second] = arguments;
    if (typeof(first) !== "number") {
        return undefined;
    }
    else if (arguments.length === 1) {
        function addSecond(second) {
            if (typeof(second) !== "number") {
                return undefined;
            }
            else {
                return first + second;
            }
        }
        return addSecond;
    }
    else if (typeof(second) !== "number") {
        return undefined;
    }
    else {
        return first + second;
    }

    // 3 fcc solution
    const [first, second] = args;
    if (args.length === 1 && typeof first === 'number') {
        return num => {
            if (typeof num === 'number') {
                return first + num;
            }
        }
    }
    if (typeof first === 'number' && typeof second === 'number') {
        return first + second;
    }
}
  
console.log(addTogether(2,3));