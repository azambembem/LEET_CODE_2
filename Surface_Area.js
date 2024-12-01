var surfaceArea = function (grid) {
  const dr = [0, 0, 1, -1];
  const dc = [1, -1, 0, 0];
  let ans = 0;
  const height = grid.length;
  const width = grid[0].length;

  for (let r = 0; r < height; r++) {
    for (let c = 0; c < width; c++) {
      let cnt = 0;
      for (let dir = 0; dir < 4; dir++) {
        let nr = r + dr[dir];
        let nc = c + dc[dir];
        if (nr < 0 || nr >= height || nc < 0 || nc >= width) {
          ans += grid[r][c];
          continue;
        }
        if (grid[r][c] > grid[nr][nc]) {
          ans += grid[r][c] - grid[nr][nc];
        }
      }
      if (grid[r][c]) ans += 2;
    }
  }
  return ans;
};
