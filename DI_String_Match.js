function diStringMatch(s) {
  const n = s.length;
  let leftVal = 0,
    rightVal = n;
  const res = new Array(n + 1);

  for (let i = 0; i < n; i++) {
    res[i] = s[i] === "I" ? leftVal++ : rightVal--;
  }
  res[n] = leftVal; // 남은 값을 마지막에 추가
  return res;
}
