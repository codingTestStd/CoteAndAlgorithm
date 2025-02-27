/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  nums.sort((a, b) => a - b);
  let count = 1;
  let answer = 0;
  let max = 0;
  console.log(nums);
  while (true) {
    if (max === nums.length) return answer;
    if (nums[max + 1] - 1 === nums[max]) {
      max++;
      count++;
    } else {
      max++;
      answer = Math.max(answer, count);
    }
  }
};

console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]));
