function countPrimes(n) {
  if (n <= 2) return 0;

  const isPrime = sieveEratosthenes(n);
  return isPrime.filter((p) => p).length;
}

function sieveEratosthenes(n) {
  const isPrime = new Array(n).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  for (let i = 2; i * i < n; ++i) {
    if (isPrime[i]) {
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  return isPrime;
}

console.log(countPrimes(10));
console.log(countPrimes(0));
console.log(countPrimes(1));
