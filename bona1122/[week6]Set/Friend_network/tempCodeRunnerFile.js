const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().trim().split("\n")
const log = console.log

// 재귀 버전
const find = (x) => {
  if (parent[x] === x) return x
  return (parent[x] = find(parent[x]))
}
// 반복문 버전
const find2 = (x) => {
  while (parent[x] !== x) {
    parent[x] = parent[parent[x]] // 경로 압축
    x = parent[x]
  }
  return x
}

const union = (a, b) => {
  a = find(a)
  b = find(b)

  if (a !== b) {
    parent[b] = a
    size[a] += size[b] // 집합 크기도 추적
  }
  return size[a]
}

let test = +input[0]
let currentLine = 1
const result = []
while (test--) {
  const F = +input[currentLine]
  let parent = {} // 집합 추적
  let size = {} // 집합 크기 추적

  for (let i = 1; i <= F; i++) {
    const [a, b] = input[currentLine + i].split(" ")

    for (let name of [a, b]) {
      if (parent[name] === undefined) {
        parent[name] = name
        size[name] = 1
      }
    }

    result.push(union(a, b))
  }

  log(result.join("\n"))
  currentLine += F + 1
}
