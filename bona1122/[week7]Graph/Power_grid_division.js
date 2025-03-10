// n개의 송전탑이 트리 형태
// 하나를 끊어서 2개로 분할하고자 함. 최대한 갯수 같게.
// 와이어중에 하나 끊은다음에, 하나에 대해 bfs수행하기
const solution = (n, wires) => {
  let diff = n
  const graph = Array.from({ length: n + 1 }, () => [])
  for ([a, b] of wires) {
    graph[a].push(b)
    graph[b].push(a)
  }
  // 송전선 별로 끊어보기(완전탐색)
  for ([a, b] of wires) {
    const visited = new Array(n + 1).fill(false)
    visited[b] = true // b로는 못가도록 처리

    let cnt = 0
    const q = [a]
    visited[a] = true

    while (q.length) {
      let cur = q.shift()
      cnt++

      for (let next of graph[cur]) {
        if (!visited[next]) {
          visited[next] = true
          q.push(next)
        }
      }
    }

    diff = Math.min(diff, Math.abs(cnt - (n - cnt))) // 전력망 노드 차이 갱신
  }
  return diff
}
