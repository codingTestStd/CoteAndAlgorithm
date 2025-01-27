function solution(nums) {
  const setNums = [...new Set(nums)];

  return Math.min(setNums.length, nums.length / 2);
}

console.log(solution([3, 3, 3, 2, 2, 2]));
