function solution(numbers, target) {
  const dp = new Map();
  dp.set(0, 1);

  for (const number of numbers) {
    const nextDp = new Map();
    for (const [sum, count] of dp) {
      nextDp.set(sum + number, (nextDp.get(sum + number) || 0) + count);
      nextDp.set(sum - number, (nextDp.get(sum - number) || 0) + count);
    }
    dp.clear();
    for (const [sum, count] of nextDp) {
      dp.set(sum, count);
    }
  }

  return dp.get(target) || 0;
}
