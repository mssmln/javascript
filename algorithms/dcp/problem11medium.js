/*
This problem was asked by Twitter.
Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.
For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].
Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.
*/

function problem11 (str, arr) {
  return typeof str === 'string' && arr.every(w => typeof w === 'string')
    ? arr.filter(el => RegExp(`^${str}`).test(el))
    : 'all the args are to be string';
}

console.log(problem11('de', ['dog', 'ddeer', 'deal']));