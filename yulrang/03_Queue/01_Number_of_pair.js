function solution(n) {
  var answer = 0;
  let answerArr = [];
  
  for(let i = 1; i <= n; i++) {
      if(n % i === 0)
          answerArr.push([i, n/i]);
  }
   
  answer = answerArr.length;
  
  return answer;
}