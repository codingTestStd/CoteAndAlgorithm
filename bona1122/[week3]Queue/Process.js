// https://school.programmers.co.kr/learn/courses/30/lessons/42587

function solution(priorities, location) {
  const queue = priorities.map((item, idx) => [item, idx]);
  let poppedNum = 0;

  while (queue.length > 0) {
    const current = queue.shift();
    const isHighestPriority = queue.every((item) => item[0] <= current[0]);

    if (isHighestPriority) {
      poppedNum++;
      if (current[1] === location) return poppedNum;
    } else {
      queue.push(current);
    }
  }
}
