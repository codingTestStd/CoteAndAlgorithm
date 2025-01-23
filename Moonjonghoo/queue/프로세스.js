function solution(priorities, location) {
  let order = 0;

  while (priorities.length > 0) {
    const current = priorities.shift();
    if (priorities.some((priority) => priority > current)) {
      priorities.push(current);
      location = location === 0 ? priorities.length - 1 : location - 1;
    } else {
      order++;
      if (location === 0) {
        return order; // 목표 프로세스가 실행되었을 때 순서를 반환
      }
      location--;
    }
  }
}
