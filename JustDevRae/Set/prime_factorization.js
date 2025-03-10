function solution(n) {
  let result = [];
  let divisor = 2;

  while (n > 1) {
    if (n % divisor === 0) {
      result.push(divisor);
      n /= divisor;
    } else {
      divisor++;
    }
  }

  return [...new Set(result)];
}
