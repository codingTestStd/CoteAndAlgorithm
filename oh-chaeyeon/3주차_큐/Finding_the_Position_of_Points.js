function solution(dot) {
  const x = dot[0];
  const y = dot[1];

  switch (true) {
    case x > 0 && y > 0:
      return 1;
    case x < 0 && y > 0:
      return 2;
    case x < 0 && y < 0:
      return 3;
    case x > 0 && y < 0:
      return 4;
  }
}
