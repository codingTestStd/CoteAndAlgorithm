function solution(s) {
  return s
      .split('')
      .sort()
      .filter((char, idx, arr) => 
          char !== arr[idx-1] && char !== arr[idx+1]
      )
      .join('');
}
// 시간 복잡도 o(n log n)
// 공간 복잡도 o(n)