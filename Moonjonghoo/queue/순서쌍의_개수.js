function solution(n) {
  let count = 0;

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      count++; // i가 약수
      if (i !== n / i) {
        count++; // i가 n의 제곱근이 아니면 나머지 짝도 추가
      }
    }
  }

  return count;
}
