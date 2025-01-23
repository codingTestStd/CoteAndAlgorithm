function solution(dartResult) {
  var answer = 0;
  let scoreArr = [];
  
  dartResult.split('').forEach((el, idx, arr) => {
      switch(el){
          case 'S':
              scoreArr[scoreArr.length-1] = Math.pow(scoreArr[scoreArr.length-1], 1);
                  break;
          case 'D':
              scoreArr[scoreArr.length-1] = Math.pow(scoreArr[scoreArr.length-1], 2);
                  break;
          case 'T':
              scoreArr[scoreArr.length-1] = Math.pow(scoreArr[scoreArr.length-1], 3);
                  break;
          case '1': 
              if(arr[idx+1] === '0') scoreArr.push(10);
              else scoreArr.push(1);
              break;
          case '0':
              if(arr[idx-1] !== '1') scoreArr.push(0);
              break;
          case '*':
              break;
          case '#':
              break;
          default :
              scoreArr.push(Number(el));
              break;
      }
  })
  
  dartResult.split('').forEach((el, idx, arr) => {
      let targetIdx = 0;
      
      if(idx >= 6) targetIdx = 2;
      else if(idx >= 4 && idx < 6) targetIdx = 1;
      else targetIdx = 0;
      
      switch(el){
          case '*':
              scoreArr[targetIdx] = scoreArr[targetIdx] * 2;
              scoreArr[targetIdx - 1] = scoreArr[targetIdx - 1] * 2;
                  break;
          case '#':
              scoreArr[targetIdx] = scoreArr[targetIdx] * (-1);
                  break;
      }
  });
  
  answer = scoreArr.reduce((acc, cur) => acc + cur, 0);
  
  return answer;
}