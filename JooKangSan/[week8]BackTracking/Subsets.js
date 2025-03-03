/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = [];
    
    const backtrack = (start, current) => {
        result.push([...current]);
        
        for (let i = start; i < nums.length; i++) {
            current.push(nums[i]);

            backtrack(i + 1, current);
            
            current.pop();
        }
    };
    
    backtrack(0, []);
    return result;
};