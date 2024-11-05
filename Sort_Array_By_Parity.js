class Solution {
  sortArrayByParity(nums) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] % 2 === 0) {
        let temp = nums[i];
        nums[i++] = nums[j];
        nums[j] = temp;
      }
    }
    return nums;
  }
}

const solution = new Solution();
console.log(solution.sortArrayByParity([3, 1, 2, 4]));
