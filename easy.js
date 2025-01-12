/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (nums) {
  let num = 0;
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    num = (num * 2 + nums[i]) % 5;
    result.push(num === 0);
  }

  return result;
};

const nums = [1, 0, 1];
console.log(prefixesDivBy5(nums));
