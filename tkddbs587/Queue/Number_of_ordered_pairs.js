function solution(n) {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      // n의 약수 구하기
      count++; // 약수 구할때마다 카운트업
    }
  }

  return count; // 순서쌍 갯수 반환
}
