function solution(cards1, cards2, goal) {
  const reversedCard1 = cards1.reverse();
  const reversedCard2 = cards2.reverse();

  for (const word of goal) {
    let flag = false;
    if (reversedCard1[reversedCard1.length - 1] === word) {
      reversedCard1.pop();
      flag = true;
    } else if (reversedCard2[reversedCard2.length - 1] === word) {
      reversedCard2.pop();
      flag = true;
    }
    if (!flag) return 'No';
  }

  return 'Yes';
}

console.log(solution(['i', 'drink', 'water'], ['want', 'to'], ['i', 'want', 'to', 'drink', 'water']));
