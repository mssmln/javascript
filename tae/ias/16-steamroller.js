// Steamroller
// Flatten a nested array. You must account for varying levels of nesting.
// Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.

// steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
// steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
// steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
// steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].


function steamrollArray(arr) {
  const a = [];
  // the push in the if doesn't push anything
  // that line serves to make the condition falsy so the real push happens in the else
  // observed with debugger
  arr.forEach(el => Array.isArray(el) ? a.push(...steamrollArray(el)) : a.push(el));
  return a;
}
  
console.log(steamrollArray([1, [2], [3, [[4]]]]));