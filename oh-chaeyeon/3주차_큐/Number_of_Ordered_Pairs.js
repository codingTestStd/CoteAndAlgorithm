function solution(n) {
  let num = 0;
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      num += 2;
      if (i * i === n) {
        num--;
      }
    }
  }
  return num;
}
