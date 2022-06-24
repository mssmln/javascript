// Factorialize a Number
/*
Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!
For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
Only integers greater than or equal to zero will be supplied to the function.

factorialize(5) should return 120.
factorialize(10) should return 3628800.
factorialize(20) should return 2432902008176640000.
factorialize(0) should return 1.
*/


function factorialize(num) {
    let n = 1;
    for (let i = num; i > 0; i--) {
      n *= i;
    }
    return n;
}
console.log(factorialize(5));


function factorialize1(num) {
    let product = 1;
    for (let i = 2; i <= num; i++) {
      product *= i;
    }
    return product;
}
console.log(factorialize1(5));


function factorialize2(num) {
    if (num === 0) {
      return 1;
    }
    return num * factorialize2(num - 1);
}
console.log(factorialize2(5));

/* 
head recursion if the recursive call is the first statement in the function, it's again a tail recursion
                                         num * factorialize(num - 1)
1st call – factorialize(5) will return    5  * factorialize(5 - 1) // factorialize(4)
2nd call – factorialize(4) will return    4  * factorialize(4 - 1) // factorialize(3)
3rd call – factorialize(3) will return    3  * factorialize(3 - 1) // factorialize(2)
4th call – factorialize(2) will return    2  * factorialize(2 - 1) // factorialize(1)
5th call – factorialize(1) will return    1  * factorialize(1 - 1) // factorialize(0)
6th call - condition is met

5th call will return (5 * (5 - 1))     // num = 5 * 4
4th call will return (20 * (4 - 1))    // num = 20 * 3
3rd call will return (60 * (3 - 1))    // num = 60 * 2
2nd call will return (120 * (2 - 1))   // num = 120 * 1
1st call will return (120)             // num = 120

(5 * (5 - 1) * (4 - 1) * (3 - 1) * (2 - 1)) = 5 * 4 * 3 * 2 * 1 = 120

*/



function factorialize3(num, factorial = 1) {
    if (num === 0) {
      return factorial;
    } else {
      return factorialize3(num - 1, factorial * num);
    }
}
console.log(factorialize3(4));

/*
tail recursion if the recursive call is the last statement in the function

In tail recursion, you perform your calculations first, and then you execute the recursive call, 
passing the results of your current step to the next recursive step

4,4
3,12
2,24
1,24

*/



function factorialize4(num) {
    let result = num;
    if (num === 0 || num === 1) return 1; 
    while (num > 1) { 
      num--;
      result *= num;
    }
    return result;
}
console.log(factorialize4(4));



function factorialize5(num) {
    return num < 0 ? 1 :
      new Array(num) // created an array with length num
        .fill(undefined) // we have to fill the array with sth in order to be reducible
        .reduce((product, _, index) => product * (index + 1), 1);
}
console.log(factorialize5(10));

/*
on first call product will be 1 because we specified an initial value
because we specified an initial value, index will be 0 on first call
down here the process:

1 * (0+1) = 1
1 * (1+1) = 2
2 * (2+1) = 6
6 * (3+1) = 24
24 * (4+1) = 120
120 * (5+1) = 720
720 * (6+1) = 5040
5040 * (7+1) = 40320
40320 * (8+1) = 362880
362880 * (9+1) = 3628800


log without fill method
[ <10 empty items> ]

log with fill method
[
  undefined, undefined,
  undefined, undefined,
  undefined, undefined,
  undefined, undefined,
  undefined, undefined
]

The fill() method changes all elements in an array to a static value, from a start index (default 0) 
to an end index (default array.length). 
It returns the modified array.

fill(value)
fill(value, start)
fill(value, start, end)
*/