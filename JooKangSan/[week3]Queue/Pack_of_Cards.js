function solution(cards1, cards2, goal) {
  let queue1 = [...cards1];
  let queue2 = [...cards2];
  
  for(let word of goal) {
      if(queue1.length > 0 && word === queue1[0]) {
          queue1.shift();
      }
      else if(queue2.length > 0 && word === queue2[0]) {
          queue2.shift();
      }
      else {
          return "No";
      }
  }
  return "Yes";
}