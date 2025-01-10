function removeOuterParentheses(s) {
  let str = "";
  let totalStr = "";
  let l_count = 0,
    r_count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      l_count++;
      str += "(";
    } else if (s[i] === ")") {
      r_count++;
      str += ")";
    }

    if (l_count !== 0 && r_count !== 0 && l_count === r_count) {
      if (str.length > 2) {
        totalStr += str.substring(1, str.length - 1);
      }
      str = "";
      l_count = 0;
      r_count = 0;
    }
  }

  return totalStr;
}

console.log(removeOuterParentheses("(()())(())"));
