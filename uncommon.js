var uncommonFromSentences = function (s1, s2) {
  const words = [...s1.split(" "), ...s2.split(" ")];
  const freq = {};

  for (const word of words) {
    freq[word] = (freq[word] || 0) + 1;
  }

  return Object.keys(freq).filter((word) => freq[word] === 1);
};
