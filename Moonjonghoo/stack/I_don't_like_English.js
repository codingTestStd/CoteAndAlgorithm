function solution(numbers) {
  const strN = [
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

  strN.forEach((nums, index) => {
    numbers = numbers.split(nums).join(index);
  });

  return Number(numbers);
}
