function solution(numlist, n) {
  var answer = [];
  
  answer = numlist.sort((a,b) => (Math.abs(n-a) - Math.abs(n-b)) || (b-a));
  
  return answer;
}