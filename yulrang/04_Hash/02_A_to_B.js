function solution(before, after) {
  var answer = 0;
  
  if(before.length !== after.length) return 0;
  
  before = before.split('').sort((a,b) => a.charCodeAt()-b.charCodeAt());
  after = after.split('').sort((a,b) => a.charCodeAt()-b.charCodeAt());
  
  for(let i=0; i<after.length; i++) {
      if(after[i] !== before[i]){
          answer = 0;
          break;
      } else {
          answer = 1;
      }
  }
  
  return answer;
}