// Combine Two Arrays Using the concat Method
// concat returns a new array and does not mutate either of the original arrays.
// Functional programming is all about creating and using non-mutating functions.
// that's why we don't use push method because it mutates the original array 

function nonMutatingConcat(original, attach) {
    return original.concat(attach);

    return [...original,...attach];
}
  
const first = [1, 2, 3];
const second = [4, 5];
console.log(nonMutatingConcat(first, second));