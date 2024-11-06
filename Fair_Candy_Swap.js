var fairCandySwap = function (aliceSizes, bobSizes) {
  const diff =
    (aliceSizes.reduce((sum, size) => sum + size, 0) -
      bobSizes.reduce((sum, size) => sum + size, 0)) /
    2;
  const bobSizesSet = new Set(bobSizes);

  for (const aliceSize of aliceSizes) {
    const target = aliceSize - diff;
    if (bobSizesSet.has(target)) {
      return [aliceSize, target];
    }
  }

  throw new Error("No valid swap found");
};
