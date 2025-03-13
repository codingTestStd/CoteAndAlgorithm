// https://www.acmicpc.net/problem/1182

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().split("\n")
const log = console.log

// 크기가 양수인 부분수열 중, 원소를 다 더한 값이 S가 되는 경우의 수 구하기
const [N, S] = input[0].split(" ").map(Number)
const arr = input[1].split(" ").map(Number)
let count = 0

// 1. 비트마스킹을 활용한 부분집합 완전탐색
// i = 1 부터해서, 크기가 0인 부분집합 제외
for (let i = 1; i < 1 << N; i++) {
  let sum = 0
  for (let j = 0; j < N; j++) {
    // j번째 원소가 부분집합에 포함되어 있다면
    if (i & (1 << j)) sum += arr[j]
  }
  if (sum === S) count++
}
// log(count)

// 2. 백트래킹을 활용한 부분집합 완전탐색
const selected = Array(N).fill(false)
let cnt = 0
const dfs = (depth) => {
  if (depth === N) {
    let sum = 0
    for (let i = 0; i < selected.length; i++) {
      if (selected[i]) sum += arr[i]
    }
    if (sum === S) cnt++
    return
  }
  dfs(depth + 1) // 선택안하고 넘어가기

  // 선택하고 넘어가기
  selected[depth] = true
  dfs(depth + 1)
  selected[depth] = false
}
dfs(0)
log(S === 0 ? --cnt : cnt)
