// https://www.acmicpc.net/problem/6603

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().split("\n")
const log = console.log

// k개의 수를 골라 집합 만들고 그 수만 가지고 번호 선택하기
let answer = ""
for (let i = 0; i < input.length; i++) {
  let [k, ...arr] = input[i].split(" ").map(Number)
  if (k === 0) break

  const selected = Array(6)
  const result = []
  const dfs = (depth, start) => {
    if (depth === 6) {
      result.push(selected.join(" "))
      return
    }
    for (let i = start; i < arr.length; i++) {
      selected[depth] = arr[i]
      dfs(depth + 1, i + 1)
    }
  }
  dfs(0, 0)
  answer += result.join("\n") + "\n\n"
}
log(answer.trim())
