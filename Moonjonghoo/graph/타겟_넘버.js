function solution(numbers, target) {
  let n = numbers.length;
  let check = Array.from({ length: n }, () => false);
  let answer = 0;
  function DFS(v) {
    if (v === n) {
      let sum = 0;
      for (let i = 0; i < n; i++) {
        if (check[i] === true) {
          sum += numbers[i];
        } else if (check[i] === false) {
          sum -= numbers[i];
        }
      }
      if (sum === target) answer++;
    } else {
      check[v] = true;
      DFS(v + 1);
      check[v] = false;
      DFS(v + 1);
    }
  }
  DFS(0);
  return answer;
}
