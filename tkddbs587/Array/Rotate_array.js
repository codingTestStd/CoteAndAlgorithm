function solution(numbers, direction) {
  if (direction === "right") {
    const lastElement = numbers.pop();
    numbers.unshift(lastElement);
  } else if (direction === "left") {
    const firstElement = numbers.shift();
    numbers.push(firstElement);
  }

  return numbers;
}
