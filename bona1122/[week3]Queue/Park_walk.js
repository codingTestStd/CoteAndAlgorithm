// https://school.programmers.co.kr/learn/courses/30/lessons/172928

function solution(park, routes) {
  let answer;
  for (let i = 0; i < park.length; i++) {
    for (let j = 0; j < park[i].length; j++) {
      if (park[i][j] === "S") {
        answer = [i, j];
        break;
      }
    }
  }

  const [row, col] = [park.length, park[0].length];
  const map = {
    E: [0, 1],
    W: [0, -1],
    N: [-1, 0],
    S: [1, 0],
  };

  for (let route of routes) {
    const [op, n] = route.split(" ");
    const [dx, dy] = map[op];
    const [x, y] = answer;
    const newX = x + dx * Number(n);
    const newY = y + dy * Number(n);

    // 다음 위치가 공원을 벗어나는지 체크
    if (newX < 0 || newX >= row || newY < 0 || newY >= col) continue;

    // 장애물 체크
    let isBlocked = false;
    for (let i = 1; i <= Number(n); i++) {
      const checkX = x + dx * i;
      const checkY = y + dy * i;
      if (park[checkX][checkY] === "X") {
        isBlocked = true;
        break;
      }
    }

    if (!isBlocked) {
      answer = [newX, newY];
    }
  }

  return answer;
}
