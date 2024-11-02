var binaryGap = function (N) {
  let binary = N.toString(2);
  let longestGap = 0;
  let currentGap = 0;
  let i = 0;

  while (i < binary.length && binary[i] !== "1") {
    i++;
  }

  for (i = i + 1; i < binary.length; i++) {
    if (binary[i] === "1") {
      longestGap = Math.max(longestGap, currentGap);
      currentGap = 0;
    } else {
      currentGap++;
    }
  }

  return longestGap;
};
