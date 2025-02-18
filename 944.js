function minDeletionSize(strs) {
  const m = strs[0].length;
  const n = strs.length;
  let ans = 0;

  for (let j = 0; j < m; ++j) {
    for (let i = 1; i < n; ++i) {
      if (strs[i][j] < strs[i - 1][j]) {
        ++ans;
        break;
      }
    }
  }
  return ans;
}
