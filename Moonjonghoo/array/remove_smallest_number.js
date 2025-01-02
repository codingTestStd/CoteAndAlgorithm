function solution(arr) {
  var answer = [];
  if (arr.length === 1) {
    answer = [-1];
  } else {
    let min = Math.min(...arr);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== min) {
        answer.push(arr[i]);
      }
    }
  }
  return answer;
}

solution([4, 3, 2, 1]);
