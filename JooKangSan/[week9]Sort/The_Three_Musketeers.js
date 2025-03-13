function solution(number) {
  var answer = 0;
  const n = number.length;
  for (let i = 0; i < n - 2; i++) {
      for (let j = i + 1; j < n - 1; j++) {
          for (let k = j + 1; k < n; k++) {
              if (number[i] + number[j] + number[k] === 0) {
                  answer++;
              }
          }
      }
  }
  return answer;
}
