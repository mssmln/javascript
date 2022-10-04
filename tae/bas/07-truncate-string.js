// Truncate a String
function truncateString(str, num) {
  /*
  if (str.length > num) return str;
  for (let i = 0; i < num; i++) {
    str += str[i];
  }
  return str.slice(-num).concat("...");
  */
  
  return str.length > num
    ? str.slice(0, num).concat("...")
    : str;
}
  
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));