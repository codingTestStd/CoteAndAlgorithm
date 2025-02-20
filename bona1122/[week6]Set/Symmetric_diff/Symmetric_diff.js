// https://www.acmicpc.net/problem/1269

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().trim().split("\n")
const log = console.log

// A-B 와 B-A 의 합집합 구하기.
// A에만 있는거, B에만 있는거 총 개수 구하기

const [an, bn] = input[0].split(" ").map(Number)
const a = input[1].split(" ").map(Number)
const b = input[2].split(" ").map(Number)
const inter = an + bn - new Set([...a, ...b]).size // 총 개수 - 합집합 갯수 = 교집합 개수

log(an + bn - 2 * inter)