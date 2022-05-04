// Sorted Union
/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
Check the assertion tests for examples.
*/

function uniteUnique(...arr) {
    return [...new Set(arr.flat())];
    return Array.from(new Set(arr.flat()));


    const finalArray = [];
    for (let i = 0; i < arr.length; i++) {
        const arrayArguments = arr[i];
        for (let j = 0; j < arrayArguments.length; j++) {
            let indexValue = arrayArguments[j];
            if (finalArray.indexOf(indexValue) < 0) {
                finalArray.push(indexValue);
            }
        }
    }
    return finalArray;


    const args = [...arr];
    const result = [];
    for (let i = 0; i < args.length; i++) {
        for (let j = 0; j < args[i].length; j++) {
            if (!result.includes(args[i][j])) {
                result.push(args[i][j]);
            }
        }
    }
    return result;


    return [...arr].flat().filter((item, ind, arr) => arr.indexOf(item) === ind);
}
  
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

/*
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
uniteUnique([1, 3, 2], [5, 4], [5, 6]) should return [1, 3, 2, 5, 4, 6].
uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
*/