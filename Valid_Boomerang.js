function isBoomerang(points) {
  const [x1, y1] = points[0];
  const [x2, y2] = points[1];
  const [x3, y3] = points[2];

  if ((y2 - y1) * (x3 - x2) === (y3 - y2) * (x2 - x1)) {
    return false;
  }

  return true;
}
