function solution(s) {
  const cmd = s.split(" ");
  const stack = [];
  for (const c of cmd) {
    if (c === "Z") {
      stack.pop();
    } else {
      stack.push(c);
    }
  }
  const answer = stack.reduce((acc, value) => acc + Number(value), 0);
  return answer;
}
