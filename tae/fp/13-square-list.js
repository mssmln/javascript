// Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
/*
Now that you have worked through a few challenges using higher-order functions 
like map(), filter(), and reduce(), you now get to apply them to solve a more complex challenge.
*/

const squareList = arr => arr.filter(el => Number.isInteger(el) && el > 0).map(el => el * el);

const squareList1 = arr => arr.filter(num => num > 0 && num % parseInt(num) === 0).map(num => Math.pow(num, 2));

const squareList2 = arr => {
    return arr.reduce((sqrIntegers, num) => {
        return Number.isInteger(num) && num > 0
          ? sqrIntegers.concat(num * num)
          : sqrIntegers;
    }, []);
}  
  
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
const squaredIntegers1 = squareList1([-3, 4.8, 5, 3, -3.2]);
const squaredIntegers2 = squareList2([-3, 4.8, 5, 3, -3.2]);

console.log(squaredIntegers);
console.log(squaredIntegers1);
console.log(squaredIntegers2);