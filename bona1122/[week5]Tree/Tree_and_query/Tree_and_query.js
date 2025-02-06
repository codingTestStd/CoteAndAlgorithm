// https://www.acmicpc.net/problem/15681
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().trim().split("\n")
const log = console.log

// 가중치, 방향 없는 트리
// 정점 U를 루트로 하는 서브트리에 속한 정점 수 출력하기

// 방법 1: 문제에서 주어진 힌트 처럼, 자식 배열을 활용
const [N, R, Q] = input[0].split(" ").map(Number)

const graph = Array.from({ length: N + 1 }, () => [])
const query = Array(Q)
const children = Array.from({ length: N + 1 }, () => [])
const size = Array(N + 1).fill(1)

for (let i = 1; i <= N - 1; i++) {
  let [u, v] = input[i].split(" ").map(Number)
  graph[u].push(v)
  graph[v].push(u)
}
let idx = 0
for (let i = N; i < N + Q; i++) {
  query[idx++] = +input[i]
}

const makeTree = (cur, parent) => {
  for (let next of graph[cur]) {
    if (next !== parent) {
      children[cur].push(next)
      makeTree(next, cur)
    }
  }
}

// 부모자식관계를 파악하기 위한 두 가지 방법
// 1. 명시적으로 배열에 저장 -> makeTree 선행 필요
const countSubtreeNodes = (cur) => {
  for (let next of children[cur]) {
    countSubtreeNodes(next)
    size[cur] += size[next]
  }
}
// 2. visited배열로 부모자식 파악
const visited = Array(N + 1).fill(false)
const countSubtreeNodes2 = (node) => {
  if (visited[node]) return size[node]
  visited[node] = true // 방문 표시로 부모-자식 관계 파악

  for (const next of graph[node]) {
    if (!visited[next]) {
      // 방문하지 않은 노드는 자식
      size[node] += countSubtreeNodes2(next)
    }
  }
  return size[node]
}
/*
 makeTree(R, 0)
 countSubtreeNodes(R)
 log(children)
*/
countSubtreeNodes2(R)

for (let q of query) log(size[q])
