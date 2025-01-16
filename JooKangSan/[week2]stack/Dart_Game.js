function solution(dartResult) {
  let scores = [];
  let currentNumber = '';
  
  for(let i = 0; i < dartResult.length; i++) {
      let char = dartResult[i];
      
      if(!isNaN(char)) {
          currentNumber += char;
      }
      else if(char === 'S' || char === 'D' || char === 'T') {
          let score = Number(currentNumber);
          
          if(char === 'D') score = Math.pow(score, 2);
          if(char === 'T') score = Math.pow(score, 3);
          
          scores.push(score);
          currentNumber = '';
      }
      else {
          if(char === '*') {
              scores[scores.length-1] *= 2;
              if(scores.length > 1) {
                  scores[scores.length-2] *= 2;
              }
          }
          else if(char === '#') {
              scores[scores.length-1] *= -1;
          }
      }
  }
  
  return scores.reduce((acc, cur) => acc + cur, 0);
}