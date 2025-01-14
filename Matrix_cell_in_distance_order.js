/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function (rows, cols, rCenter, cCenter) {
  const allCoordinates = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      allCoordinates.push([r, c]);
    }
  }

  allCoordinates.sort((a, b) => {
    const distA = Math.abs(a[0] - rCenter) + Math.abs(a[1] - cCenter);
    const distB = Math.abs(b[0] - rCenter) + Math.abs(b[1] - cCenter);
    return distA - distB;
  });

  return allCoordinates;
};

const result = allCellsDistOrder(3, 3, 0, 0);
console.log(result);
