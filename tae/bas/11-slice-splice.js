// Slice and Splice
// The input arrays should remain the same after the function runs
function frankenSplice(arr1, arr2, n) {
  /*
  let ar = [...arr2];
  ar.splice(n, 0, ...arr1);
  return ar;
  */
  
  /*
  if (n === 0) return arr1;
  let f = arr2.slice(n);  
  let p = arr2.slice(0, n);
  for (let i in arr2) {
    if (i == n) {
      return [...p, ...arr1, ...f];
    }
  }
  */
    
  let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}
  
console.log(frankenSplice([1, 2, 3, 4], [], 0));
console.log(frankenSplice([1, 2, 3], [4, 5], 1));