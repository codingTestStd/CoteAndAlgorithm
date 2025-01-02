function solution(arr, divisor) {
  const answer = [];
  for(let num of arr) {
      if(num % divisor === 0) {
          answer.push(num);
      }
  }
  if(answer.length === 0) return [-1];

  return answer.sort((a, b) => a - b);
}

function solution(arr, divisor) {
  const answer = arr.filter(num => num % divisor === 0).sort((a, b) => a - b);
  return answer.length ? answer : [-1];
}