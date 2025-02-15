// https://www.acmicpc.net/problem/14425

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().trim().split("\n")
const log = console.log

const [N, M] = input[0].split(" ").map(Number)
const S = new Set() // 집합 S를 Set으로 만듭니다

// N개의 문자열을 집합 S에 추가
for (let i = 1; i <= N; i++) {
  S.add(input[i])
}

let count = 0
// M개의 문자열 각각이 집합 S에 포함되어 있는지 확인
for (let i = N + 1; i <= N + M; i++) {
  if (S.has(input[i])) count++
}

log(count)