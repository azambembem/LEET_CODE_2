function reverseOnlyLetters(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if ((char >= "A" && char <= "Z") || (char >= "a" && char <= "z")) {
      stack.push(char);
    }
  }

  let result = "";
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if ((char >= "A" && char <= "Z") || (char >= "a" && char <= "z")) {
      result += stack.pop();
    } else {
      result += char;
    }
  }

  return result;
}

console.log(reverseOnlyLetters("k-oR-eA"));
console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!"));
