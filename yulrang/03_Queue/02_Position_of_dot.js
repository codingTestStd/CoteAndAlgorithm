function solution(dot) {
  var answer = 0;
  
  if(dot[0] > 0){
      answer = dot[1] > 0 ? 1 : 4;
  } else if(dot[0] < 0) {
      answer = dot[1] > 0 ? 2 : 3;
  }
  return answer;
}