var largestSumAfterKNegations = function (A, K) {
  A.sort((a, b) => Math.abs(b) - Math.abs(a));

  for (let i = 0; i < A.length && K > 0; i++) {
    if (A[i] < 0) {
      A[i] = -A[i];
      K--;
    }
  }

  if (K % 2 === 1) {
    A[A.length - 1] = -A[A.length - 1];
  }

  return A.reduce((sum, num) => sum + num, 0);
};
