function solution(s) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    const rotated = s.slice(i) + s.slice(0, i);
    if (isValid(rotated)) answer++;
  }
  return answer;
}

function isValid(str) {
  const stack = [];
  for (let c of str) {
    if ("([{".includes(c)) stack.push(c);
    else if (!stack.length || !isPair(stack.pop(), c)) return false;
  }
  return stack.length === 0;
}

function isPair(open, close) {
  return (
    (open === "(" && close === ")") ||
    (open === "[" && close === "]") ||
    (open === "{" && close === "}")
  );
}
