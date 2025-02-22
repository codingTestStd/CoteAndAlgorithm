function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];

  let queue = [];
  queue.push([0, 0]);

  while (queue.length) {
    const [y, x] = queue.shift();

    if (y === n - 1 && x === m - 1) {
      return maps[y][x];
    }

    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];

      if (ny >= 0 && ny < n && nx >= 0 && nx < m && maps[ny][nx] === 1) {
        maps[ny][nx] = maps[y][x] + 1;
        queue.push([ny, nx]);
      }
    }
  }

  return -1;
}
