function solution(dot) {
  const [x, y] = dot;

  if (x > 0 && y > 0) return 1; // 1사분면
  if (x < 0 && y > 0) return 2; // 2사분면
  if (x < 0 && y < 0) return 3; // 3사분면
  if (x > 0 && y < 0) return 4; // 4사분면
}
