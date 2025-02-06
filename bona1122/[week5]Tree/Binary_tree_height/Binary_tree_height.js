// https://www.acmicpc.net/problem/1068
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().trim().split("\n")
const log = console.log

// 노드 제거시, 노드와 노드의 모든 자손이 트리에서 제거됨
// 노드를 지운 후, 트리의 리프노드 개수 구하기
// => 부모노드 정보를 통해 그래프를 구성하고, bfs로 탐색하며 리프노드 개수 카운트

const n = +input[0]
const parents = input[1].split(" ").map(Number)
const remove = +input[2]
const graph = Array.from({ length: n }, () => [])
let root = -1

for (let i = 0; i < n; i++) {
  const parent = parents[i]
  if (parent === -1) {
    root = i
  } else {
    graph[parent].push(i)
  }
}

let result = 0
const queue = remove === root ? [] : [root]
const visited = new Array(n).fill(false)
visited[root] = true

while (queue.length) {
  let item = queue.shift()
  let isLeaf = true

  for (let v of graph[item]) {
    if (v !== remove) {
      isLeaf = false
      if (!visited[v]) {
        visited[v] = true
        queue.push(v)
      }
    }
  }

  if (isLeaf) result++
}

log(result)
