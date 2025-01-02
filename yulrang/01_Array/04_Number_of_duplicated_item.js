function solution(array, n) {
  var answer = 0;
  var filteredArr = array.filter((el) => el === n);
  answer = filteredArr.length;
  
  return answer;
}