// https://www.acmicpc.net/problem/11725

// 루트없는 트리 주어지면(트리루트 1), 2번노드부터 각 노드의 부모를 구하기
// => 그래프 정보 저장하고, bfs로 탐색하면서 부모노드 찾기
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().trim().split("\n")
const log = console.log

const n = +input[0]
const graph = Array.from({ length: n + 1 }, () => [])
for (let i = 1; i < n; i++) {
  let [v1, v2] = input[i].split(" ").map(Number)
  graph[v1].push(v2)
  graph[v2].push(v1)
}

const visited = new Array(n + 1).fill(false)
const parent = new Array(n + 1).fill(0)

const queue = [1]
visited[1] = true

while (queue.length) {
  let item = queue.shift()

  for (let v of graph[item]) {
    if (visited[v]) continue
    visited[v] = true
    queue.push(v)
    parent[v] = item
  }
}
log(result.slice(2).join("\n"))
