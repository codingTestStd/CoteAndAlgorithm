// 핵심
// 1. 1차원 배열을 인덱스를 이용해서 (n,n) 행렬로 변환하는 관점
// 2. i = 1,2, ..., n 에 대해 1행1열부터 i행i열까지의 영역 내의 빈 칸을 숫자 i로 채우는 것이 Math.max(row, col)인 규칙을 갖는다는 것
function solution(n, left, right) {
  return Array.from({ length: right - left + 1 }, (_, idx) => {
    const i = left + idx;
    const row = Math.floor(i / n);
    const col = i % n;
    return Math.max(row, col) + 1;
  });
}
