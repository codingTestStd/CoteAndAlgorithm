function solution(s) {
  let stack = [];
  let arr = s.split(" ");
  
  for(let i = 0; i < arr.length; i++) {
      if(arr[i] === "Z") {
          stack.pop();
      } else {
          stack.push(Number(arr[i]));
      }
  }
  
  let sum = 0;
  for(let i = 0; i < stack.length; i++) {
      sum += stack[i];
  }
  
  return sum;
}