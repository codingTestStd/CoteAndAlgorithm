function solution(arr, divisor) {
  const answer = [];
  for (const val of arr) {
    if (val % divisor === 0) answer.push(val);
  }
  if (answer.length <= 0) answer.push(-1);
  answer.sort((a, b) => a - b);
  return answer;
}
