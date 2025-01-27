function solution(priorities, location) {
  let answer = 1;
  const queue = [];

  const prioritiesWithIndex = priorities.map((priority, index) => ({ priority, index }));

  while (prioritiesWithIndex.length) {
    const { priority, index } = prioritiesWithIndex.shift();

    const checkPriority = prioritiesWithIndex.findIndex((e) => e.priority > priority);

    // 우선순위가 더 큰 프로세스가 없으면
    if (checkPriority === -1) {
      if (location === index) return queue.length + 1;
      queue.push(priority);
      continue;
    }

    prioritiesWithIndex.push({ priority, index });
  }

  return answer;
}
console.log(solution([1, 1, 9, 1, 1, 1], 0));
