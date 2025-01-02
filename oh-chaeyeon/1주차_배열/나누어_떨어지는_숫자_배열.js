function solution(arr, divisor) {
  var answer = arr.filter((num) => num % divisor === 0);
  if (answer.length === 0) return [-1];
  return answer.sort((a, b) => a - b);
}
