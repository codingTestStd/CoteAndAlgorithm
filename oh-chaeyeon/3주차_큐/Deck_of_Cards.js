function solution(cards1, cards2, goal) {
  const q1 = [...cards1];
  const q2 = [...cards2];

  for (const word of goal) {
    if (q1.length > 0 && q1[0] === word) {
      q1.shift();
    } else if (q2.length > 0 && q2[0] === word) {
      q2.shift();
    } else {
      return "No";
    }
  }
  return "Yes";
}
