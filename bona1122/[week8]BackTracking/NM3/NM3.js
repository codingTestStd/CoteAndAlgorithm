// https://www.acmicpc.net/problem/15651

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString()
const log = console.log

// 1-N 중 "중복가능하게" "순서" 있이, M개를 선택하는 문제
const [N, M] = input.split(" ").map(Number)
let result = []

const selected = Array(M)
const dfs = (depth) => {
  if (depth === M) {
    result.push(selected.join(" "))
    return
  }

  for (let i = 1; i <= N; i++) {
    selected[depth] = i
    dfs(depth + 1)
  }
}

dfs(0)
log(result.join("\n"))
