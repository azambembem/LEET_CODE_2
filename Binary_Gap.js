function binaryGap(n) {
  let ans = 0;
  for (let d = -32; n > 0; n = Math.floor(n / 2), d++) {
    if (n % 2 === 1) {
      ans = Math.max(ans, d);
      d = 0;
    }
  }
  return ans;
}
