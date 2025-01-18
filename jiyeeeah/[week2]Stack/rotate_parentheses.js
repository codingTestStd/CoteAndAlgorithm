function isValidParentheses(pars) {
  const stack = [];
  for (const p of pars) {
    if (p === "(" || p === "[" || p == "{") {
      stack.push(p);
    } else {
      if (stack.length === 0) return false;

      const top = stack[stack.length - 1];
      if (p === ")" && top === "(") stack.pop();
      else if (p === "]" && top === "[") stack.pop();
      else if (p === "}" && top === "{") stack.pop();
    }
  }
  return stack.length === 0;
}

function solution(s) {
  let answer = 0;
  const N = s.length;

  for (let i = 0; i < N; i++) {
    let isValid = true;
    const stack = [];
    for (let j = 0; j < N; j++) {
      const p = s[(i + j) % N];
      if (p === "(" || p === "[" || p == "{") {
        stack.push(p);
      } else {
        if (stack.length === 0) {
          isValid = false;
          break;
        }

        const top = stack[stack.length - 1];
        if (p === ")" && top === "(") stack.pop();
        else if (p === "]" && top === "[") stack.pop();
        else if (p === "}" && top === "{") stack.pop();
        else {
          isValid = false;
          break;
        }
      }
    }
    if (isValid && stack.length === 0) answer++;
  }
  return answer;
}
