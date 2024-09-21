function largeGroupPositions(s) {
  const n = s.length;
  let start = 0;
  const result = [];

  while (start < n) {
    let end = start;
    while (end < n && s[end] === s[start]) {
      end++;
    }

    if (end - start >= 3) {
      result.push([start, end - 1]);
    }

    start = end;
  }

  return result;
}

console.log(largeGroupPositions("abbxxxxzzy"));
console.log(largeGroupPositions("abc"));
console.log(largeGroupPositions("abcdddeeeeaabbbcd"));
