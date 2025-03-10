function solution(arr, k) {
  var answer = [...new Set(arr)];
    return [...answer.slice(0, k), ...Array(Math.max(0, k - answer.length)).fill(-1)];
}