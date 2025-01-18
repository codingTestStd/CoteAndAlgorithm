function solution(s) {
  const stack = [];
  let answer = 0;

  s.split(' ').forEach((e) => {
    // 숫자가 아니면
    if (Number.isNaN(Number(e))) {
      answer -= stack.pop();
    } else {
      const num = Number(e);
      answer += num;
      stack.push(num);
    }
  });

  return answer;
}

console.log(solution('10 Z 20 Z'));
