// Return Largest Numbers in Arrays
function largestOfFour(arr) {
    // v1
    // let a = [];
    // arr.forEach(el => a.push(Math.max(...el)));
    // return a;  

    // v1.1
    return arr.map(el => Math.max(...el));
}  
//console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));



function largestOfFour1(arr) {
    return arr.map(group => group.reduce((prev, current) => current > prev ? current : prev));
}
//console.log(largestOfFour1([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));



function largestOfFour2(arr) {
    return arr.map(Function.apply.bind(Math.max, null));
}
//console.log(largestOfFour2([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));



function largestOfFour3(arr, finalArr = []) {
    return !arr.length
      ? finalArr
      : largestOfFour3(arr.slice(1), finalArr.concat(Math.max(...arr[0])));
}
console.log(largestOfFour3([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));