function solution(s) {
  const stack = [];

  for (let char of s) {
    if (char === "(") {
      stack.push(char);
    } else if (stack.length > 0) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
}
