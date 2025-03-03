/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];
    
    const backtrack = (start, current, remaining) => {
        if (remaining === 0) {
            result.push([...current]);
            return;
        }
        
        if (remaining < 0) {
            return;
        }
        
        for (let i = start; i < candidates.length; i++) {
            current.push(candidates[i]);

            backtrack(i, current, remaining - candidates[i]);

            current.pop();
        }
    };
    
    backtrack(0, [], target);
    return result;
};