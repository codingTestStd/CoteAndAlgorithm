// https://school.programmers.co.kr/learn/courses/30/lessons/131705

const solution = (number) => {
  // 학생은 각자 정수번호가짐
  // 세명의 번호를 더해서 0이 되면 삼총사, 삼총사 만드는 가짓수 구하기
  let result = 0
  const selected = Array(3).fill(0)
  const dfs = (depth, start) => {
    if (depth === 3) {
      let sum = 0
      for (let i of selected) {
        sum += number[i]
      }
      if (sum === 0) result++
      return
    }
    for (let i = start; i < number.length; i++) {
      selected[depth] = i
      dfs(depth + 1, i + 1)
    }
  }
  dfs(0, 0)
  return result
}
