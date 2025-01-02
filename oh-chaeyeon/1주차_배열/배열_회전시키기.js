function solution(numbers, direction) {
  if (direction === "right") {
    return [
      numbers[numbers.length - 1],
      ...numbers.slice(0, numbers.length - 1),
    ];
  } else if (direction === "left") {
    return [...numbers.slice(1), numbers[0]];
  }
}
