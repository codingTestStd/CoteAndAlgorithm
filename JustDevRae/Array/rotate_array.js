function solution(numbers, direction) {
  var answer = [];

  if (direction == "left") {
    numbers.push(numbers.shift());
  }

  if (direction == "right") {
    numbers.unshift(numbers.pop());
  }

  return (answer = numbers);
}
