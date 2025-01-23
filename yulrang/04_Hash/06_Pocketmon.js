function solution(nums) {
  var answer = [];
  let pocketmon = {};
  
  nums.forEach((el) => {
      pocketmon[el] = (pocketmon[el] || 0) + 1;
  })
  answer = Object.keys(pocketmon);
  
  return answer.length >= nums.length/2 ? nums.length/2 : answer.length;
}