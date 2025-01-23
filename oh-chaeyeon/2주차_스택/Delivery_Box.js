function solution(order) {
  let stack = [];
  let current = 1;
  let count = 0;

  for (let box of order) {
    while (current <= box) {
      stack.push(current++);
    }
    if (stack.pop() === box) {
      count++;
    } else {
      break;
    }
  }

  return count;
}
