function solution(prices) {
  const answer = Array(prices.length).fill(0);
  const stack = [];

  prices.forEach((price, i) => {
    while (stack.length && prices[stack[stack.length - 1]] > price) {
      const idx = stack.pop();
      answer[idx] = i - idx;
    }
    stack.push(i);
  });

  stack.forEach((idx) => {
    answer[idx] = prices.length - 1 - idx;
  });

  return answer;
}
