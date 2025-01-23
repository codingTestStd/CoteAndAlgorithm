function solution(dot) {
  let queue = [...dot]
  
  const x = queue.shift();
  const y = queue.shift();
  
  if(x > 0 && y > 0) return 1;
  if(x < 0 && y > 0) return 2;
  if(x < 0 && y < 0) return 3;
  return 4;
}