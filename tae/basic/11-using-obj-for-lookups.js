// Using Objects for Lookups
function phoneticLookup(key) {
  let result = "";
  const LOOKUP = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
  result = LOOKUP[key];
  return result;
}

console.log(phoneticLookup("bravo"));