// Check For The Presence of an Element With indexOf()
function quickCheck(arr, elem) {
    // we don't need ? true : false in the condition
    // indexOf() returns the position, or index, of that element
    // or -1 if the element does not exist on the array
    return arr.indexOf(elem) != -1;
}
  
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));