function solution(my_string) {
  var answer = 0;
  let newArr = [];
  my_string.split(' ').forEach((el, idx, arr) => {
      if(idx === 0) {
          newArr.push(Number(el));
      }
      if(el === '+' || el === '-') {
          newArr.push(Number(arr[idx + 1]))
          if (el === '+'){
              answer = newArr[0] + newArr[1];
          } else {
              answer = newArr[0] - newArr[1];
          }
          newArr = [];
          newArr.push(answer);
      }
  })
  answer = newArr[0];
  return answer;
}