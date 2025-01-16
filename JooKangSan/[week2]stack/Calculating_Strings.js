function solution(my_string) {
  let arr = my_string.split(' ');
  let result = Number(arr[0]);
  
  for(let i = 1; i < arr.length; i += 2) {
      const sign = arr[i];
      const num = Number(arr[i + 1]);
      
      if(sign === '+') {
          result += num;
      }
      if(sign === '-') {
          result -= num;
      }
  }
  
  return result;
}