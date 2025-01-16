function solution(line) {
  const points = new Set();

  // 교점 찾기(크래머 공식)
  for (let i = 0; i < line.length - 1; i++) {
    for (let j = i + 1; j < line.length; j++) {
      const [a, b, e] = line[i];
      const [c, d, f] = line[j];

      const denominator = a * d - b * c;
      if (denominator === 0) continue;

      const x = (b * f - e * d) / denominator;
      const y = (e * c - a * f) / denominator;

      if (x === Math.floor(x) && y === Math.floor(y)) {
        points.add(`${x},${y}`); // set에서 중복없이 하려고 배열 대신 문자열 이용 -> 나중에 다시 변환 필요
      }
    }
  }

  // 좌표 배열로 변환, 최대/최소 구하기
  const coords = Array.from(points).map((p) => p.split(",").map(Number));
  const [minX, maxX] = [
    Math.min(...coords.map((p) => p[0])),
    Math.max(...coords.map((p) => p[0])),
  ];
  const [minY, maxY] = [
    Math.min(...coords.map((p) => p[1])),
    Math.max(...coords.map((p) => p[1])),
  ];

  // 격자 생성, 별 찍기
  const grid = Array(maxY - minY + 1)
    .fill()
    .map(() => Array(maxX - minX + 1).fill("."));
  coords.forEach(([x, y]) => {
    grid[maxY - y][x - minX] = "*";
  });

  return grid.map((row) => row.join(""));
}
