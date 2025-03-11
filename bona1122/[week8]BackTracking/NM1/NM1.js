// https://www.acmicpc.net/problem/15649

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString()
const log = console.log

// "순서"가 있게, 1-N 중 "중복없이" M개를 선택하는 문제
const [N, M] = input.split(" ").map(Number)
const selected = Array(M) // 총 M개를 고를 것임
const visited = Array(N + 1).fill(false) // 중복선택 방지 위해
const dfs = (depth) => {
  if (depth === M) {
    log(selected.join(" "))
    return
  }
  for (let i = 1; i <= N; i++) {
    if (visited[i]) continue
    selected[depth] = i
    visited[i] = true
    dfs(depth + 1)
    visited[i] = false
  }
}

dfs(0, 1)
