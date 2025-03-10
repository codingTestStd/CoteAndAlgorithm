function solution(citations) {
  // 인용 수를 내림차순으로 정렬
  citations.sort((a, b) => b - a);

  let h = 0;
  // 논문 수와 인용 수 비교
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1) {
      h = i + 1;
    } else {
      break;
    }
  }
  return h;
}
