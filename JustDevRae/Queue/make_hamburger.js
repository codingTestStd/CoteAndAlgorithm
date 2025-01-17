function solution(ingredient) {
  const burger = [];
  let answer = 0;
  for (let i of ingredient) {
    burger.push(i);

    if (
      burger.length >= 4 &&
      burger[burger.length - 4] === 1 &&
      burger[burger.length - 3] === 2 &&
      burger[burger.length - 2] === 3 &&
      burger[burger.length - 1] === 1
    ) {
      burger.splice(burger.length - 4, 4);
      answer++;
    }
  }

  return answer;
}
