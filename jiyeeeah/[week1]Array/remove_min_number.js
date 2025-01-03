function solution(arr) {
  const answer = [...arr];

  const minNum = arr.sort((a, b) => a - b)[0];
  answer.splice(answer.indexOf(minNum), 1);
  if (answer.length <= 0) answer.push(-1);

  return answer;
}
