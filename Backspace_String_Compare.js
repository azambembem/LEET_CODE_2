const backspaceCompare = (S, T) => {
  return processString(S) === processString(T);
};

function processString(str) {
  const stack = [];

  for (const char of str) {
    if (char !== "#") {
      stack.push(char);
    } else if (stack.length > 0) {
      stack.pop();
    }
  }

  return stack.join("");
}

console.log(backspaceCompare((s = "ab#c"), (t = "ad#c")));
console.log(backspaceCompare((s = "ab##"), (t = "c#d#")));
console.log(backspaceCompare((s = "a#c"), (t = "b")));
