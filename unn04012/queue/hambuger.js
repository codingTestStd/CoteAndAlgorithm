function solution(ingredients) {
  let answer = 0;
  const queue = [];

  for (const ingredient of ingredients) {
    queue.push(ingredient);
    if (queue.length >= 4) {
      const hamburger = queue.slice(-4).join('');

      if (hamburger === '1231') {
        answer++;
        for (let i = 0; i < 4; i++) queue.pop();
      }
    }
  }

  return answer;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));
