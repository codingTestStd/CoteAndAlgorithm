/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let hash = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (!hash.has(nums[i])) {
      hash.add(nums[i]);
    }
  }
  if (hash.size !== nums.length) return true;
  else {
    return false;
  }
};
