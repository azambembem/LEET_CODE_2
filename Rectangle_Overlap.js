function isRectangleOverlap(rec1, rec2) {
  const noOverlap =
    rec1[2] <= rec2[0] ||
    rec1[3] <= rec2[1] ||
    rec1[0] >= rec2[2] ||
    rec1[1] >= rec2[3];

  return !noOverlap;
}

console.log(isRectangleOverlap([0, 0, 2, 2], [1, 1, 3, 3]));
console.log(isRectangleOverlap([0, 0, 1, 1], [1, 0, 2, 1]));
