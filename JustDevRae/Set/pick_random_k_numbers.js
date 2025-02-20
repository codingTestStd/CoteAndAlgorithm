function solution(arr, k) {
  const uniqueSet = new Set();
  const result = [];

  for (const num of arr) {
    if (!uniqueSet.has(num)) {
      uniqueSet.add(num);
      result.push(num);
    }
    if (result.length === k) break;
  }

  while (result.length < k) {
    result.push(-1);
  }

  return result;
}
