function solution(s) {
  var answer = 0;
  let arr = s.split(' ');
  let newArr = [];
  
  for(let i=0; i<arr.length; i++) {
      if( arr[i] !== 'Z' ) {
          newArr.push(arr[i]);
      } else {
          newArr.pop(arr[i-1])
      }
  }
  answer = newArr.reduce((acc, cur) => acc + Number(cur), 0);
  return answer;
}