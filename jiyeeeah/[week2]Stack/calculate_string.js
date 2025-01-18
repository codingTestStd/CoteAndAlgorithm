function solution(my_string) {
  const expression = my_string.split(" ");
  const stack = [Number(expression[0])];
  for (let i = 1; i < expression.length; i++) {
    if (expression[i] === "+" || expression[i] === "-") {
      stack.push(expression[i]);
    } else {
      const operator = stack.pop();
      const a = stack.pop();
      let result;
      if (operator === "+") result = a + Number(expression[i]);
      else result = a - Number(expression[i]);
      stack.push(result);
    }
  }
  return stack[0];
}
