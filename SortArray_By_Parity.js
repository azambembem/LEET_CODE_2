function sortArrayByParityII(nums) {
  const even = [];
  const odd = [];

  nums.forEach((num) => {
    if (num % 2 === 0) {
      even.push(num);
    } else {
      odd.push(num);
    }
  });

  const result = [];
  let i = 0;

  // 짝수와 홀수를 번갈아가며 삽입
  while (i < even.length && i < odd.length) {
    result.push(even[i], odd[i]);
    i++;
  }

  return result;
}

const param_1 = [4, 2, 5, 7];
const ret = sortArrayByParityII(param_1);
console.log(ret); // [4, 5, 2, 7] (짝수와 홀수가 번갈아 나옴)
