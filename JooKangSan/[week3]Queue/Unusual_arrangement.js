function solution(numlist, n) {
  let queue = [...numlist];
  let result = [];
  
  queue.sort((a, b) => {
      const A = Math.abs(n - a);
      const B = Math.abs(n - b);
      if(A === B) {
          return b - a;
      }
      return A - B;
  });
  
  while(queue.length > 0) {
      result.push(queue.shift());
  }
  
  return result;
}