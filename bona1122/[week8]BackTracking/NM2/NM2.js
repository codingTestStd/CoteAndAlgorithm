// https://www.acmicpc.net/problem/15650

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString()
const log = console.log

// 1-N 중 "중복없이" M개를 선택하는 문제, "오름차순" 정렬 필요
// => 오름차순 조건으로 인해 for문에서 start 인덱스(현재 선택한 수보다 큰 수부터)를 사용하여 구현
const [N, M] = input.split(" ").map(Number)

const selected = Array(M)
const dfs = (depth, start) => {
  if (depth === M) {
    log(selected.join(" "))
    return
  }
  for (let i = start; i <= N; i++) {
    selected[depth] = i
    dfs(depth + 1, i + 1)
  }
}

dfs(0, 1)
