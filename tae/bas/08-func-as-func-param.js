// Finders Keepers
function findElement(arr, func) {
  // return arr.filter(func)[0]; bad code even if it works

  /*
  let i = 0;
  while (i < arr.length) {
    if (func(arr[i])) {
      return arr[i]
    }
    i++
  }
  return undefined;
  */

  // return arr.find(func);

  /*
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
  return undefined;
  */

  // return arr[arr.map(func).indexOf(true)];

  // return arr[arr.findIndex(func)];

  return arr.length && !func(arr[0]) 
    ? findElement(arr.slice(1), func)
    : arr[0]; // undefined    
}
  
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));