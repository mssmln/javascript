// Where do I Belong
/*
Return the lowest index at which a value (second argument) 
should be inserted into an array (first argument) once it has been sorted

getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.
getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.
getIndexToIns([40, 60], 50) should return 1.
getIndexToIns([3, 10, 5], 3) should return 0.
getIndexToIns([5, 3, 20, 3], 5) should return 2.
getIndexToIns([2, 20, 10], 19) should return 2.
getIndexToIns([2, 5, 10], 15) should return 3.
getIndexToIns([], 1) should return 0.
*/

function getIndexToIns(arr, num) {
  /*
  if (!arr.length) return 0;
  let ar = [];
  let ol = arr.length;      
  for (let i = 0; i < ol; i++) {
    ar.push(Math.min(...arr));
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
  }
  let r;    
  ar.forEach((el, i) => {
    if (num === el) {
      r = i;
    } else if (num > el && num < ar[i+1]) {
      r = i + 1;
    } else if (num > el) {
      r = ar.length;
    }
  });
  return r;
  */

  /*
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return i;
  }
  return arr.length;
  */

  /*
  return arr.filter(val => num > val).length;
  */

  /*
  let index = arr
    .sort((curr, next) => curr - next)
    .findIndex(currNum => num <= currNum);
  
  return index === -1 ? arr.length : index;
  */

  return arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num);    
}

console.log(getIndexToIns([2, 5, 10], 15));