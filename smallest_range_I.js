var smallestRangeI = function (A, K) {
  let min = Math.min(...A);
  let max = Math.max(...A);

  if (max - min <= 2 * K) {
    return 0;
  }

  return max - min - 2 * K;
};
