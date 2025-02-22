function solution(numbers, target) {
  let count = 0;

  function DFS(index, currentSum) {
    if (index === numbers.length) {
      if (currentSum === target) count++;
      return;
    }

    DFS(index + 1, currentSum + numbers[index]);
    DFS(index + 1, currentSum - numbers[index]);
  }

  DFS(0, 0);

  return count;
}
