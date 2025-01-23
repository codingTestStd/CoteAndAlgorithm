function solution(n) {
  var answer = 0;

  // 1부터 n까지 숫자를 확인
  for (let i = 1; i <= n; i++) {
    // i가 n의 약수인지 확인
    if (n % i === 0) {
      // i가 n의 약수인지 확인
      answer++;
    }
  }
  return answer;
}
