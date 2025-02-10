// 1. 해시맵을 이용한 풀이
const solution1 = (nums) => {
  let max = 0
  const can = nums.length / 2
  const map = nums.reduce((map, num) => {
    if (map[num] === undefined) {
      max++
      map[num] = 1
    }
    return map
  }, {})
  return can < max ? can : max
}

// 2. Set을 이용한 풀이
const solution2 = (nums) => {
  const can = nums.length / 2
  const max = [...new Set(nums)].length

  return can < max ? can : max
}
