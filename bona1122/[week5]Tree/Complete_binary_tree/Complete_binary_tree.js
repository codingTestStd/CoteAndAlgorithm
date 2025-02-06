// https://www.acmicpc.net/problem/9934
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().trim().split("\n")
const log = console.log

// 상근이는 중위순회로 이진 트리를 순회한 결과를 가지고 있다.
// 각 레벨에 있는 빌딩 번호 구하기
const k = +input[0]
const arr = input[1].split(" ").map(Number)
let result = Array.from({ length: k }, () => [])

const dfs = (arr, depth) => {
  if (arr.length < 1) return

  const mid = Math.floor(arr.length / 2)
  result[depth].push(arr[mid])

  dfs(arr.slice(0, mid), depth + 1)
  dfs(arr.slice(mid + 1), depth + 1)
}

dfs(arr, 0)
result.forEach((row) => log(row.join(" ")))
