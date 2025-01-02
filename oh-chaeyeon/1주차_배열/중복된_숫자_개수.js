function solution(array, n) {
  var answer = array.reduce((count, num) => {
    return num === n ? count + 1 : count;
  }, 0);
  return answer;
}
