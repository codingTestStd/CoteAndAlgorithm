// https://school.programmers.co.kr/learn/courses/30/lessons/12952

function solution(n) {
  let queens = []
  const possible = (row, col) => {
    for (let [queenRow, queenCol] of queens) {
      // 이미 놓인 퀸들과 비교하며, 배치가 가능한지.
      if (queenRow === row || queenCol === col) return false // 같은 행/열 불가
      if (Math.abs(queenRow - row) === Math.abs(queenCol - col)) return false // 대각선 불가
    }
    return true
  }

  let cnt = 0
  const dfs = (row) => {
    if (row === n) {
      cnt++
      return
    }
    for (let col = 0; col < n; col++) {
      if (possible(row, col)) {
        queens.push([row, col])
        dfs(row + 1)
        queens.pop()
      }
    }
  }
  dfs(0)
  return cnt
}
