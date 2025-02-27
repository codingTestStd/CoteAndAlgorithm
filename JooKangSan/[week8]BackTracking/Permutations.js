
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const result = [];

  const backtrack = (current, remaining) => {
      if (remaining.length === 0) {
          result.push([...current]);
          return;
      }
      
      for (let i = 0; i < remaining.length; i++) {
          current.push(remaining[i]);
          
          const nextRemaining = remaining.filter((_, index) => index !== i);
          backtrack(current, nextRemaining);
          
          current.pop();
      }
  };
  
  backtrack([], nums);
  return result;
};