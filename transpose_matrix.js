var transpose = function (A) {
  let ans = new Array(A[0].length).fill().map(() => new Array(A.length));

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      ans[j][i] = A[i][j];
    }
  }

  return ans;
};

console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
);
