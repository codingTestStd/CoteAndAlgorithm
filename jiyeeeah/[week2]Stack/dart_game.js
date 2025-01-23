function solution(dartResult) {
  const stack = [];
  for (const c of dartResult) {
    const topIndex = stack.length - 1;
    if (c === "S") stack[topIndex] = stack[topIndex] ** 1;
    else if (c === "D") stack[topIndex] = stack[topIndex] ** 2;
    else if (c === "T") stack[topIndex] = stack[topIndex] ** 3;
    else if (c === "*") {
      stack[topIndex] *= 2;
      if (topIndex - 1 >= 0) stack[topIndex - 1] *= 2;
    } else if (c === "#") {
      stack[topIndex] *= -1;
    } else {
      if (c === "0" && stack[topIndex] === 1) {
        stack[topIndex] = 10;
      } else {
        stack.push(Number(c));
      }
    }
  }
  return stack.reduce((acc, val) => acc + val, 0);
}
