function solution(priorities, location) {
  var answer = 0;
  const queue = priorities.map((priority, index) => ({ priority, index }));

  while (queue.length > 0) {
    const current = queue.shift();

    const highPriority = queue.some((item) => item.priority > current.priority);

    if (highPriority) {
      queue.push(current);
    } else {
      answer++;

      if (current.index === location) {
        return answer;
      }
    }
  }
}
