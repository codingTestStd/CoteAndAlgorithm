function solution(emergency) {
  let sorted = [...emergency].sort((a, b) => b - a); // 배열 내림차순 정렬

  return emergency.map((v) => sorted.indexOf(v) + 1);
  // 기존 배열의 각 요소를 내림차순 정렬된 배열에 매칭되는 요소로 접근하여 index + 1 로 순서대로 순위 매기고 map() 메서드를 통해 순위가 담긴 새 배열 반환
}
