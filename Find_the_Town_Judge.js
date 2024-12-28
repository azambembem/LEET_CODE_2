function findJudge(n, trust) {
  if (n === 1) {
    return 1;
  }

  const trustSet = new Set();
  const trustCount = new Map();
  for (const [a, b] of trust) {
    trustSet.add(a);
    trustCount.set(b, (trustCount.get(b) || 0) + 1);
  }

  if (trustSet.size !== n - 1) {
    return -1;
  }

  for (const [person, count] of trustCount.entries()) {
    if (count === n - 1 && !trustSet.has(person)) {
      return person;
    }
  }

  return -1;
}
