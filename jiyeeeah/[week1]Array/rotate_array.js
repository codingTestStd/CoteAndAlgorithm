function solution(numbers, direction) {
  const answer = [...numbers];
  if (direction === "right") {
    const temp = answer.pop();
    answer.unshift(temp);
  } else if (direction === "left") {
    const temp = answer.shift();
    answer.push(temp);
  }
  return answer;
}
