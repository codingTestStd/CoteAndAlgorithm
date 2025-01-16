function solution(s) {
  const stack = [];
  for (const par of s) {
    if (par === "(") {
      stack.push(par);
    } else {
      if (stack.length === 0) return false;
      else stack.pop();
    }
  }
  return stack.length === 0;
}
