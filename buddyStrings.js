function buddyStrings(s, goal) {
  if (s.length !== goal.length) return false;

  let set = new Set();
  for (let ch of s) {
    set.add(ch);
  }

  if (s === goal) {
    return set.size < s.length;
  }

  let index1 = -1,
    index2 = -1;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) !== goal.charAt(i)) {
      count++;
      if (index1 === -1) index1 = i;
      else if (index2 === -1) index2 = i;
      if (count > 2) return false;
    }
  }

  if (count === 2) {
    return (
      s.charAt(index1) === goal.charAt(index2) &&
      s.charAt(index2) === goal.charAt(index1)
    );
  } else {
    return false;
  }
}
