function solution(arr) {
  let minNum = Math.min(...arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === minNum) {
      arr.splice(i, 1);
      if (arr.length === 0) {
        arr.push(-1);
      }
    }
  }
  return arr;
}
