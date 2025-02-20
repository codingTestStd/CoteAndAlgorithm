// https://school.programmers.co.kr/learn/courses/30/lessons/120852

// n이 주어질때, n의 소인수를 오름차순으로 담은 배열 리턴하기
function solution(n) {
  const factors = new Set()
  for (let i = 2; i * i <= n; i++) {
    while (n % i === 0) {
      factors.add(i)
      n /= i
    }
  }
  // 마지막으로 남은 수가 1보다 크면 그 자체가 소수이므로 추가
  if (n > 1) factors.add(n)
  return Array.from(factors)
}
