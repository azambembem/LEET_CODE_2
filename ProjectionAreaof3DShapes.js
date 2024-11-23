var projectionArea = function (grid) {
  let x = 0,
    y = 0,
    z = 0;

  for (let i = 0; i < grid.length; i++) {
    let maxY = 0;
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] !== 0) x++; // xy 평면
      if (grid[i][j] > maxY) maxY = grid[i][j]; // y축 최대값
    }
    y += maxY;
  }

  for (let q = 0; q < grid.length; q++) {
    let maxZ = 0;
    for (let p = 0; p < grid.length; p++) {
      if (grid[p][q] > maxZ) maxZ = grid[p][q]; // z축 최대값
    }
    z += maxZ;
  }

  return x + y + z;
};

// 예제
const grid = [
  [1, 2],
  [3, 4]
];
console.log(projectionArea(grid)); // 결과: 17
