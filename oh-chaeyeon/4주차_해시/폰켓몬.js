function solution(nums) {
  const newNum = [...new Set(nums)];
  const selection = nums.length / 2;

  return Math.min(newNum.length, selection);
}
