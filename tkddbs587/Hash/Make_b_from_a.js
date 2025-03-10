function solution(before, after) {
  // 1. 문자열을 배열로 변환
  // 2. 오름차순 정렬
  // 3. 정렬한 배열 문자열로 변환 후 비교
  return before.split("").sort().join("") === after.split("").sort().join("")
    ? 1
    : 0;
}
