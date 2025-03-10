function solution(id_pw, db) {
  var answer = '';
  
  for(const pair of db){
      if(pair[0] !== id_pw[0]) {
          answer = "fail";
      } else {
          if(pair[1] !== id_pw[1]){
              answer = "wrong pw";
          }
          else {
              answer = "login";
          } 
          break;
      }
  }
  return answer;
}