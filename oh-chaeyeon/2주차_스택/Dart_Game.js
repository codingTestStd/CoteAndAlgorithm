function solution(dartResult) {
  const stack = [];
  let i = 0;

  while (i < dartResult.length) {
    const isTen = dartResult[i] === "1" && dartResult[i + 1] === "0";
    let score = isTen ? 10 : parseInt(dartResult[i]);
    i += isTen ? 2 : 1;

    const bonus = dartResult[i++];
    score **= bonus === "S" ? 1 : bonus === "D" ? 2 : 3;

    if (dartResult[i] === "*" || dartResult[i] === "#") {
      score *= dartResult[i] === "*" ? 2 : -1;
      if (dartResult[i++] === "*" && stack.length) {
        stack[stack.length - 1] *= 2;
      }
    }

    stack.push(score);
  }

  return stack.reduce((sum, cur) => sum + cur, 0);
}
