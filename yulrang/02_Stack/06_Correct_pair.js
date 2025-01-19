function solution(s){
  var answer = true;
  let pairArr = [];

  s.split('').forEach((el) => {
      if(el === '(') {
          pairArr.push(el);
      } else if(el === ')' && pairArr.includes('(')) {
          pairArr.pop();
      } else
          pairArr.push('-');
  })
  
  answer = pairArr.length === 0 ? true : false;
  
  return answer;
}