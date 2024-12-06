function isLongPressedName(name, typed) {
  let i = 0;

  for (let j = 0; j < typed.length; j++) {
    if (i < name.length && name[i] === typed[j]) {
      i++;
    } else if (j === 0 || typed[j] !== typed[j - 1]) {
      return false;
    }
  }

  return i === name.length;
}

console.log(isLongPressedName("alex", "aaleex"));
console.log(isLongPressedName("saeed", "ssaaedd"));
console.log(isLongPressedName("leelee", "lleeelee"));
