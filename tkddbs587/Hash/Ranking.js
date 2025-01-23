function solution(score) {
  // score의 평균 점수 구하기
  let average = score.map((el) => (el[0] + el[1]) / 2);

  // 평균을 내림차순으로 정렬한 배열 선언 slice() 통해 average 배열 얕은 복사(원본 배열은 변경되지 않음)
  let sortedAverage = average.slice().sort((a, b) => b - a);

  // average의 요소와 동일한 sortedAverage 배열의 index 값에 1을 더하기
  return average.map((el) => sortedAverage.indexOf(el) + 1);
}
