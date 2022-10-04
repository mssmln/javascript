// Iterate Through All an Array's Items Using For Loops
function filteredArray(arr, elem) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i].includes(elem)) {
            newArr.push(arr[i]);
            // scenario with break where we want just the first arr to meet the condition
            break;
        }
    }   
    return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));


function filteredArray1(arr, elem) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(elem) === -1) {
            newArr.push(arr[i]); 
        }
    }
    return newArr;
}

console.log(filteredArray1([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
console.log(filteredArray1([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));