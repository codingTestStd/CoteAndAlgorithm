function solution(arr, divisor) {
  var answer = [];
  
  arr.forEach((el) => {
      if(el % divisor === 0) answer.push(el);
  })
  answer.sort((a,b) => a-b);
  
  if(answer.length === 0) return [-1];
  
  return answer;
}