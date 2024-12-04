function hasGroupsSizeX(deck) {
  const freq = new Map();

  for (const card of deck) {
    freq.set(card, (freq.get(card) || 0) + 1);
  }

  function gcd(a, b) {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  }

  let g = 0;
  for (const count of freq.values()) {
    g = gcd(g, count);
    if (g === 1) return false;
  }

  return g > 1;
}
