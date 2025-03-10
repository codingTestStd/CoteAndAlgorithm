const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().trim().split("\n")
const log = console.log

// 1. 재귀 버전
const find = (x, parent) => {
  if (parent[x] === x) return x
  return (parent[x] = find(parent[x], parent))
}
// 2. 반복문 버전
const find2 = (x, parent) => {
  while (parent[x] !== x) {
    parent[x] = parent[parent[x]]
    x = parent[x]
  }
  return x
}

// 1. 문자열 크기 비교 방식의 union
// - 작은 값을 부모로 선택하여 트리 밸런싱 시도
// - 문제점: 문자열 비교(a < b)는 사전순 비교라서 예측 불가능한 결과 발생
const union1 = (a, b, parent, size) => {
  a = find(a, parent)
  b = find(b, parent)

  if (a < b) {
    parent[b] = a
    size[a] += size[b]
    return size[a]
  } else {
    parent[a] = b
    size[b] += size[a]
    return size[b]
  }
}
// 2. 단순 병합 방식의 union -> 항상 첫 번째 루트(a)를 부모로 선택
// -> 작은 값을 부모로 하는 방식보다 트리밸런싱이 비효율적이지만 find에서 경로압축방식을 함께 사용 시 보완된다.
const union2 = (a, b, parent, size) => {
  a = find(a, parent)
  b = find(b, parent)
  if (a !== b) {
    parent[b] = a
    size[a] += size[b]
  }
  return size[a]
}

// 3. rank 기반 union -> 트리높이를 저장한 rank 배열을 활용하여 트리밸런싱 문제 해결
const union3 = (a, b, parent, size, rank) => {
  a = find(a, parent)
  b = find(b, parent)

  if (a !== b) {
    if (rank[a] < rank[b]) {
      // b의 rank가 더 크면 b를 루트로
      parent[a] = b
      size[b] += size[a]
      return size[b]
    } else {
      // a의 rank가 더 크거나 같으면 a를 루트로
      parent[b] = a
      size[a] += size[b]
      if (rank[a] === rank[b]) {
        rank[a]++ // rank가 같을 때만 증가
      }
      return size[a]
    }
  }
  return size[a]
}

let test = +input[0]
let currentLine = 1

while (test--) {
  const F = +input[currentLine]
  let parent = {}
  let size = {}
  let rank = {}
  const result = []

  for (let i = 1; i <= F; i++) {
    const [a, b] = input[currentLine + i].split(" ")

    for (let name of [a, b]) {
      if (parent[name] === undefined) {
        parent[name] = name
        size[name] = 1
        rank[name] = 0
      }
    }

    result.push(union3(a, b, parent, size, rank))
  }

  log(result.join("\n"))
  currentLine += F + 1
}
