function commonChars(words) {
  const ans = [];
  const commonCount = Array(26).fill(Infinity);

  for (const word of words) {
    const count = Array(26).fill(0);
    for (const char of word) {
      count[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    for (let i = 0; i < 26; i++) {
      commonCount[i] = Math.min(commonCount[i], count[i]);
    }
  }

  for (let i = 0; i < 26; i++) {
    while (commonCount[i] > 0) {
      ans.push(String.fromCharCode("a".charCodeAt(0) + i));
      commonCount[i]--;
    }
  }

  return ans;
}

console.log(commonChars(["bella", "label", "roller"])); // ["e", "l", "l"]
console.log(commonChars(["cool", "lock", "cook"])); // ["c", "o"]
