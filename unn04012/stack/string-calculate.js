function solution(my_string) {
  let answer = 0;

  const expression = my_string.split(' ').reverse();

  while (expression.length) {
    const element = expression.pop();

    if (element === '+') {
      answer += Number(expression.pop());
      expression.push(answer);
    } else if (element === '-') {
      answer -= Number(expression.pop());
      expression.push(answer);
    } else {
      // 숫자인 경우
      answer = Number(element);
    }
  }

  return answer;
}

console.log(solution('3 + 4 - 2'));
