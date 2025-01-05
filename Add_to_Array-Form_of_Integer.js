function addToArrayForm(num, k) {
  // 배열을 숫자로 변환
  const numValue = BigInt(num.join(""));
  // 합산 후 문자열로 변환
  const sumValue = (numValue + BigInt(k)).toString();
  // 문자열을 배열로 변환
  return [...sumValue].map(Number);
}
