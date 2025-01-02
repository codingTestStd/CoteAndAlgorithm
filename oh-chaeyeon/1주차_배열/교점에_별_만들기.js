function solution(line) {
  const points = [];

  for (let i = 0; i < line.length; i++) {
    for (let j = i + 1; j < line.length; j++) {
      const [A1, B1, C1] = line[i];
      const [A2, B2, C2] = line[j];

      const denominator = A1 * B2 - A2 * B1;

      if (denominator !== 0) {
        const x = (B1 * C2 - B2 * C1) / denominator;
        const y = (A2 * C1 - A1 * C2) / denominator;

        if (Number.isInteger(x) && Number.isInteger(y)) {
          points.push([x, y]);
        }
      }
    }
  }

  const xs = points.map((point) => point[0]);
  const ys = points.map((point) => point[1]);

  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);

  const width = maxX - minX + 1;
  const height = maxY - minY + 1;
  const grid = Array.from({ length: height }, () => Array(width).fill("."));

  for (const [x, y] of points) {
    grid[maxY - y][x - minX] = "*";
  }

  return grid.map((row) => row.join(""));
}
