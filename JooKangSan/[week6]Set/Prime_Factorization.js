function solution(n) {
  let primeFactors = new Set();
  let num = n;
  
  while(num % 2 === 0) {
      primeFactors.add(2);
      num = num / 2;
  }
     for(let i = 3; i <= num; i += 2) {
      while(num % i === 0) {
          primeFactors.add(i);
          num = num / i;
      }
  }
  if(num > 2) {
      primeFactors.add(num);
  }
  
  return [...primeFactors].sort((a, b) => a - b);
}