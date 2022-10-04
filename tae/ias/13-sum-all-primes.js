// Sum All Primes
/*
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. 
For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/

function sumPrimes(num) {
  let factorial = [];
  let res = 0;
  for (let j = num; j > 1; --j) {
    let i = 1;
    while (i <= j) {
      if (j % i === 0) {
        factorial.push(i);
      }
      i++;
    }
    if (factorial.length === 2) {
      res += factorial[1];
    }
    factorial = [];
  }
  return res;



  // function isPrime(num) {
  //   for (let i = 2; i <= Math.sqrt(num); i++) {
  //     if (num % i == 0) {
  //       return false;
  //     }
  //   }
  //   return true;
  // }
  // let sum = 0;
  // for (let i = 2; i <= num; i++) {
  //   if (isPrime(i)) {
  //     sum += i;
  //   }
  // }
  // return sum;



  let primes = [];
  for (let i = 2; i <= num; i++) {
    if (primes.every((prime) => i % prime !== 0)) {
      primes.push(i);
    }
  }
  return primes.reduce((sum, prime) => sum + prime, 0);



  let isPrime = Array(num + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= num; j += i) {
        isPrime[j] = false;
      }
    }
  }
  return isPrime.reduce((sum, prime, index) => prime ? sum + index : sum, 0);
}

console.log(sumPrimes(977));

/*
sumPrimes(10) should return a number.
sumPrimes(10) should return 17.
sumPrimes(977) should return 73156.
*/