function solution(dot) {
  let answer = 0;
  const [x, y] = dot;

  const quadrant = [
    [1, 1],
    [-1, 1],
    [-1, -1],
    [1, -1],
  ];

  for (let i = 0; i < quadrant.length; i++) {
    const [x, y] = quadrant[i];

    const newX = x * dot[0];
    const newY = y * dot[1];

    if (newX > 0 && newY > 0) {
      answer = i + 1;
      break;
    }
  }

  return answer;
}

console.log(solution([-7, 9]));
