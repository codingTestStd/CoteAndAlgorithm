function solution(numbers) {
  const nums = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let answer = numbers;

  for (let i = 0; i < nums.length; i++) {
    answer = answer.replace(nums[i], i);
  }

  return Number(answer);
}
