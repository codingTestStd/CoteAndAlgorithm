// https://www.acmicpc.net/problem/14888

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().trim().split("\n")
const log = console.log

// N개로 이루어진 수열, N-1개의 연산자
// +, -, x, /. (나눗셈은 몫만 취하기, 음수를 양수로 나눌떄는 양수로바꾸어 몫취하고 음수로 바꾸기)
// 최대, 최소 구하기

const N = +input[0]
const arr = input[1].split(" ").map(Number)
const ops = input[2].split(" ").map(Number)
let max = -Infinity
let min = Infinity

const dfs = (depth, acc) => {
  if (depth === N - 1) {
    max = Math.max(max, acc)
    min = Math.min(min, acc)
    return
  }
  for (let i = 0; i < 4; i++) {
    if (ops[i] > 0) {
      ops[i] -= 1
      if (i === 0) {
        dfs(depth + 1, acc + arr[depth + 1])
      } else if (i === 1) {
        dfs(depth + 1, acc - arr[depth + 1])
      } else if (i === 2) {
        dfs(depth + 1, acc * arr[depth + 1])
      } else {
        if (acc < 0) {
          dfs(depth + 1, -Math.floor(-acc / arr[depth + 1]))
        } else {
          dfs(depth + 1, Math.floor(acc / arr[depth + 1]))
        }
      }
      ops[i] += 1
    }
  }
}

dfs(0, arr[0])

log(max + "\n" + min)
