function solution(n, left, right) {
  const answer = [];
  for (let k = left; k <= right; k++) {
    const i = Math.floor(k / n);
    const j = k % n;
    answer.push(Math.max(i, j) + 1);
  }
  return answer;
}
