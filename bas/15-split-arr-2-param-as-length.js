// Chunky Monkey
/*
Write a function that splits an array (first argument) into groups the length of size (second argument) 
and returns them as a two-dimensional array.

chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
*/

function chunkArrayInGroups(arr, size) {

    /*let na = [];
    let ol = arr.length;
    
    for (let i = 0; i < ol; i += size) {    
      na.push(arr.slice(0,size));
      arr.splice(0,size); 
    }
    
    return na;*/


    /*let newArr = [];
    for (let i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size));
    }
    return newArr;*/


    /*let newArr = [];
    let i = 0;

    while (i < arr.length) {
        newArr.push(arr.slice(i, i + size));
        i += size;
    }
    return newArr;*/


    /*let newArr = [];
    while (arr.length > 0) {
        newArr.push(arr.splice(0, size));
    }
    return newArr;*/


    /*if (arr.length <= size) {
        return [arr];
    } else {
        return [arr.slice(0, size)].concat(
          chunkArrayInGroups(arr.slice(size), size));
    }*/

    /*
    1st function call:
    chunkArrayInGroups([3, 4, 2, 8, 9, 10, 200], 2));
    its return statement: 
    [ [3, 4] ].concat(chunkArrayInGroups( [2, 8, 9, 10, 200], 2 ) );

    
    2nd function call:
    chunkArrayInGroups( [2, 8, 9, 10, 200], 2 );
    its return statement:
    [ [2, 8] ].concat( chunkArrayInGroups( [9, 10, 200],  2 ) );


    3rd function call: 
    chunkArrayInGroups( [9, 10, 200],  2 );
    its return statement: 
    [ [9, 10] ].concat( chunkArrayInGroups( [200], 2 ) );


    4th function call: 
    chunkArrayInGroups( [200], 2 );
    since it meets the if statment's condition ( [200].length <= 2 ),
    it returns [ [200] ] 
    which triggers the  whole returning process: 

    [ [200] ] is returned which begins concatenation starting with to the 4th call of the chunkArrayInGroups function, 
    which returns [ [200] ] in the 4th function call and concatenates that to [ [9, 10] ] 
    which returns [ [9, 10], [200] ] in 3rd function call and concatenates that to [ [2, 8] ]
    which returns [ [2, 8], [9, 10], [200] ] in the 2nd function call and concatenates that to [ [3, 4] ]  
    which returns [ [3, 4] , [2, 8], [9, 10], [200] ] in the 1st function call, finishing the recursive function
    */


    let temp = [];
    let result = [];

    for (let a = 0; a < arr.length; a++) {
        if (a % size !== size - 1) temp.push(arr[a]);
        else {
            temp.push(arr[a]);
            result.push(temp);
            temp = [];
        }
    }

    if (temp.length !== 0) result.push(temp);
    return result;
}
    
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));

/*
if a%3=>0 !== 3-1=>2 y then
if a%3=>1 !== 3-1=>2 y then
if a%3=>2 !== 3-1=>2 n else
if a%3=>0 !== 3-1=>2 y then
if a%3=>1 !== 3-1=>2 y then
if a%3=>2 !== 3-1=>2 n else
if a%3=>0 !== 3-1=>2 y then


console.log(0%3)
0
console.log(1%3)
1
console.log(2%3)
2
console.log(3%3)
0
console.log(4%3)
1
console.log(5%3)
2
console.log(6%3)
0
console.log(7%3)
1
console.log(8%3)
2
console.log(9%3)
0
console.log(2%3)
2
console.log(3%4)
3
console.log(10%11)
10
console.log(9%11)
9
console.log(5%11) 
5
*/