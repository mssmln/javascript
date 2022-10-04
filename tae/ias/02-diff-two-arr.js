// Diff Two Arrays
/*
Compare two arrays and return a new array with any items only found 
in one of the two given arrays, but not both. In other words, 
return the symmetric difference of the two arrays.
Note: You can return the array with its elements in any order.
*/

const diffArray = (arr1, arr2) => arr1.concat(arr2).filter(el => !arr1.includes(el) || !arr2.includes(el)); 
    
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

function diffArray1(arr1, arr2) {
    // const newArr = [];
    
    // function onlyInFirst(first, second) {
    //     for (let i = 0; i < first.length; i++) {
    //         if (second.indexOf(first[i]) === -1) {
    //             newArr.push(first[i]);
    //         }
    //     }
    // }

    // onlyInFirst(arr1, arr2);
    // onlyInFirst(arr2, arr1);

    // return newArr;

    return [...diff(arr1, arr2), ...diff(arr2, arr1)];

    function diff(a, b) {
        return a.filter(item => b.indexOf(item) === -1);
    }
}


/*
["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].
["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].
[1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
[], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].
[1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].
*/