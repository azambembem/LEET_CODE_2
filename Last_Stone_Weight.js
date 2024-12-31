var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => b - a);

    const stone1 = stones.shift();
    const stone2 = stones.shift();

    if (stone1 !== stone2) {
      stones.push(stone1 - stone2);
    }
  }

  return stones.length === 0 ? 0 : stones[0];
};
