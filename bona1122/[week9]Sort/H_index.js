// https://school.programmers.co.kr/learn/courses/30/lessons/42747
// 핵심: 논문을 인용 횟수 기준 내림차순으로 정렬한 후,
// 논문의 개수(인덱스+1)가 해당 논문의 인용 횟수보다 작거나 같은 최대 지점을 찾는 것

function solution(citations) {
  citations = citations.sort((a, b) => b - a)

  let i = 0 // 현재까지 확인한 논문의 인덱스
  // i+1 <= citations[i]가 참이면:
  // "i+1번 이상 인용된 논문이 i+1편 이상"이라는 의미
  while (i + 1 <= citations[i]) {
    i++
  }

  return i
}
