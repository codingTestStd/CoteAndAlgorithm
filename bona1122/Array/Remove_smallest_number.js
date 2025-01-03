const solution = (arr) => {
  if (arr.length <= 1) return [-1];
  const min = Math.min(...arr);
  const minIdx = arr.indexOf(min);
  arr.splice(minIdx, 1); // splice는 제거된 요소들의 배열을 반환하므로 return arr.splice(minIdx, 1);는 틀리게된다.
  return arr;
};
