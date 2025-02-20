function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const queue = [[0, 0]];
  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  visited[0][0] = true;
  let count = 1;

  while (queue.length > 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const [x, y] = queue.shift();

      if (x === n - 1 && y === m - 1) {
        return count;
      }

      for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;

        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < n &&
          ny < m &&
          maps[nx][ny] === 1 &&
          !visited[nx][ny]
        ) {
          visited[nx][ny] = true;
          queue.push([nx, ny]);
        }
      }
    }
    count++;
  }

  return -1;
}
