// https://www.acmicpc.net/problem/11478

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().trim()
const log = console.log

// 서로 다른 부분 문자열의 개수 출력하기
// 길이는 1,000 이하.
const set = new Set()
for (let i = 0; i < input.length; i++) {
  for (let j = i; j < input.length; j++) {
    const sliced = input.slice(i, j + 1)
    set.add(sliced)
  }
}
log(set.size)
