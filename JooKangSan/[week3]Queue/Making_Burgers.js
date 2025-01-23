function solution(ingredient) {
    let stack = [];
    let count = 0;
    let i = 0;
    
    while(i < ingredient.length) {
        stack.push(ingredient[i]);
        
        if(stack.length >= 4) {
            const len = stack.length;
            if(stack[len-4] === 1 && 
               stack[len-3] === 2 && 
               stack[len-2] === 3 && 
               stack[len-1] === 1) {
                stack.splice(-4);
                count++;
            }
        }
        i++;
    }
    
    return count;
 }

// function solution(ingredient) {
//   let queue = [...ingredient];
//   let stack = [];
//   let count = 0;
  
//   while(queue.length > 0) {
//       stack.push(queue.shift());
      
//       if(stack.length >= 4) {
//           const len = stack.length;
//           if(stack[len-4] === 1 && 
//              stack[len-3] === 2 && 
//              stack[len-2] === 3 && 
//              stack[len-1] === 1) {
//               stack.splice(-4);
//               count++;
//           }
//       }
//   }
  
//   return count;
// }