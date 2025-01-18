function solution(n) {
  const divisors = [];

  for (let i = 1; i <= n; i++) if (n % i === 0) divisors.push(i);
  return divisors.length;
}

console.log(solution(100));
