function solution(n) {
  let queue = [];
  let count = 0;
  for(let i = 1; i <= Math.sqrt(n); i++) {
      if(n % i === 0) {
          queue.push(i);
      }
  }
  while(queue.length > 0) {
      const num = queue.shift();
      const pair = n / num;
      
      if(num === pair) {
          count++;
      } else {
          count += 2;
      }
  }
  
  return count;
}