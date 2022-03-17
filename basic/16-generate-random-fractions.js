// Generate Random Fractions with JavaScript
function randomFraction() {
  let r = 0;
  while (r === 0) {
    r = Math.random();
  }
  return r;
}

console.log(randomFraction());