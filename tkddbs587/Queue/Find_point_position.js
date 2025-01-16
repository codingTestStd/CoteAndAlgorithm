function solution(dot) {
  const [x, y] = dot; // x, y 값

  if (Math.sign(x) === 1) {
    // x값이 양수일때
    if (Math.sign(y) === 1) {
      // y값도 양수면
      return 1; // 1사분면
    } else {
      return 4; // x값은 양수고 y값은 음수 -> 4사분면
    }
  }

  if (Math.sign(x) === -1) {
    // x값이 음수일때
    if (Math.sign(y) === -1) {
      // y값도 음수면
      return 3; // 3사분면
    } else {
      return 2; // y값은 양수고 x값은 음수 -> 2사분면
    }
  }
}
