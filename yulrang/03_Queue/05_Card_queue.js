function solution(cards1, cards2, goal) {
  var answer = '';
  
  for(let i=0; i<goal.length; i++) {
      if(cards1[0] === goal[i] || cards2[0] === goal[i]){
          if(cards1[0] === goal[i]){
              cards1.shift();
          }
          if(cards2[0] === goal[i]){
              cards2.shift();
          }
          answer = "Yes";
      } else {
          answer = "No";
          break;
      }
  }
  
  return answer;
}