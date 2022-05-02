// Seek and Destroy
/*
You will be provided with an initial array (the first argument in the destroyer function), 
followed by one or more arguments. Remove all elements from the initial array 
that are of the same value as these arguments.
Note: You have to use the arguments object.
*/

function destroyer(arr, ...args) {
    return arr.filter(el => args.indexOf(el) === -1);
    
    return arr.filter(el => !args.includes(el));

    // let valsToRemove = Object.values(arguments).slice(1);
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = 0; j < valsToRemove.length; j++) {
    //         if (arr[i] === valsToRemove[j]) {
    //             delete arr[i];
    //         }
    //     }
    // }
    // return arr.filter(item => item !== null);

    // var valsToRemove = Array.from(arguments).slice(1);
    // return arr.filter(function(val) {
    //     return !valsToRemove.includes(val);
    // });
}
    
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));