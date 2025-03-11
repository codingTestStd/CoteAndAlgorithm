// https://www.acmicpc.net/problem/15652

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString()
const log = console.log

// 1-N 중 "중복가능하게" M개를 선택하는 문제, "오름차순" 정렬 필요
// => 오름차순 조건으로 인해 for문에서 start 인덱스(현재 선택한 수 이상)를 사용하여 구현

const [N, M] = input.split(" ").map(Number)
const selected = Array(M)
let result = []

const dfs = (depth, start) => {
  if (depth === M) {
    result.push(selected.join(" "))
    return
  }
  for (let i = start; i <= N; i++) {
    selected[depth] = i
    dfs(depth + 1, i)
  }
}

dfs(0, 1)
log(result.join("\n"))
