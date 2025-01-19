/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function (arr) {
  const sorted = [...arr].sort((a, b) => a - b);

  const rankMap = new Map();
  let rank = 1;

  for (const num of sorted) {
    if (!rankMap.has(num)) {
      rankMap.set(num, rank);
      rank++;
    }
  }

  return arr.map((num) => rankMap.get(num));
};

console.log(canThreePartsEqualSum((arr = [0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1])));
console.log(canThreePartsEqualSum((arr = [0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1])));
console.log(canThreePartsEqualSum((arr = [3, 3, 6, 5, -2, 2, 5, 1, -9, 4])));
