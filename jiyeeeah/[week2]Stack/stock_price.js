function solution(prices) {
  const N = prices.length;
  const answer = new Array(N).fill(0);

  const stack = [0];
  for (let i = 1; i < N; i++) {
    for (let j = stack.length - 1; j >= 0; j--) {
      if (prices[stack[j]] > prices[i]) {
        answer[stack[j]] = i - stack[j];
        stack.pop();
      } else {
        break;
      }
    }
    stack.push(i);
  }
  const last = stack.pop();
  for (const s of stack) {
    answer[s] = last - s;
  }
  return answer;
}
