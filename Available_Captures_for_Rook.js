function countIntDirection(board, start, delta) {
  let count = 0;
  for (let i = 1; ; i++) {
    const row = start.row + i * delta.row;
    const col = start.col + i * delta.col;
    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length)
      break;
    if (board[row][col] === "B") break;
    if (board[row][col] === "p") {
      count++;
      break;
    }
  }
  return count;
}

function numRookCaptures(board) {
  let rookCoord = {};
  let ans = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === "R") rookCoord = { row: i, col: j };
    }
  }

  ans += countIntDirection(board, rookCoord, { row: 0, col: -1 });
  ans += countIntDirection(board, rookCoord, { row: 0, col: 1 });
  ans += countIntDirection(board, rookCoord, { row: -1, col: 0 });
  ans += countIntDirection(board, rookCoord, { row: 1, col: 0 });

  return ans;
}
