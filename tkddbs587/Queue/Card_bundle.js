function solution(cards1, cards2, goal) {
  let index1 = 0; // 카드1의 인덱스
  let index2 = 0; // 카드2의 인덱스

  for (let i = 0; i < goal.length; i++) {
    if (cards1[index1] === goal[i]) {
      // 카드1의 인덱스 0부터 순서대로 골의 인덱스 i와 같으면
      index1++; // 카드 1의 인덱스 1 증가
    } else if (cards2[index2] === goal[i]) {
      // 카드2의 인덱스 0부터 순서대로 골의 인덱스 i와 같으면
      index2++; // 카드 2의 인덱스 1 증가
    } else return "No"; // 순서대로 비교하다가 더 이상 일치하는 인덱스가 없으면 만들 수 없는 문장이므로 No 반환
  }
  return "Yes"; // goal의 인덱스만큼 순회를 성공적으로 마치면 문장을 만들 수 있으므로 Yes 반환
}
