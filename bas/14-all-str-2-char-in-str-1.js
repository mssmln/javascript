// Mutations
/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
The arguments ["hello", "hey"] should return false because the string hello does not contain a y.
Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
*/

function mutation(arr) {

  /*return arr[1].toLowerCase().split("")
    .every(el => arr[0].toLowerCase().split("").includes(el));*/

  
  /*let test = arr[1].toLowerCase();
  let target = arr[0].toLowerCase();

  for (let i = 0; i < test.length; i++) {
    // < 0 means is not found because index starts from 0
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;*/


  return arr[1].toLowerCase().split("")
    .every(el => arr[0].toLowerCase().indexOf(el) !== -1);
}

console.log(mutation(["hello", "Hello"]));



// not good for prod purpose
function mutation1([ target, test ], i = 0) {
  target.toLowerCase();
  test.toLowerCase();
  
  return i >= test.length
    ? true
    : !target.includes(test[i])
        ? false
        : mutation1([ target, test ], i + 1);
}

console.log(mutation1(["Alien", "line"]));