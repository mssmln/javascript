// Match a Literal String with Different Possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // You can search for multiple patterns using the alternation or OR operator: |
let result = petRegex.test(petString);
console.log(result);