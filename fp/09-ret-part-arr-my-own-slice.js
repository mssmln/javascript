// Return Part of an Array Using the slice Method
/*
The slice method returns a copy of certain elements of an array. 
It can take two arguments, the first gives the index of where to begin the slice, 
the second is the index for where to end the slice (and it's non-inclusive). 
If the arguments are not provided, the default is to start at the beginning 
of the array through the end, which is an easy way to make a copy of the entire array. 
The slice method does not mutate the original array, but returns a new one.
*/

function sliceArray(anim, beginSlice, endSlice) {
  // return anim.slice(beginSlice, endSlice);
    
  let na = [];
  let l = endSlice - beginSlice;
  if (Array.isArray(anim) && endSlice > beginSlice) {
    for (let i = endSlice - 1; i >= beginSlice; i--) {
      l--;
      na[l] = anim[i];
    }
    return na;
  }
}
  
const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
console.log(sliceArray(inputAnim, 1, 3));