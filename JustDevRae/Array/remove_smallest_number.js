function solution(arr) {
  var answer = [];
  const minValue = Math.min(...arr);
  answer = arr.filter((element) => element > minValue);
  if (answer.length === 0) answer.push(-1);
  
  return answer;
}
