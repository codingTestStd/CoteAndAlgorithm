function solution(score) {
  // 각 학생의 평균 점수 계산
  const averages = score.map(([eng, math]) => (eng + math) / 2);

  // 평균 점수를 내림차순으로 정렬하여 등수 매기기
  const sorted = [...averages].sort((a, b) => b - a);

  // 원래 평균 점수 배열의 각 값이 정렬된 배열에서 몇 번째 순위인지 계산
  return averages.map((avg) => sorted.indexOf(avg) + 1);
}
