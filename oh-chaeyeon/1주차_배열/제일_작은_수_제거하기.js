function solution(arr) {
  const min = Math.min(...arr);
  var answer = arr.filter((num) => num !== min);
  return answer.length === 0 ? [-1] : answer;
}
