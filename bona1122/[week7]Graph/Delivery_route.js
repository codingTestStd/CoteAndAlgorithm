// 가중치 있는 무방향 그래프(중복간선 존재)
// 다익스트라 알고리즘 활용
// 1번에서 각 마을로 음식배달. K시간 이하로 배달 가능한 곳 개수 구하기
// 우선순위큐 구현해서 하는 것이 베스트
const solution = (N, road, K) => {
  const graph = Array.from({ length: N + 1 }, () => [])
  for (let [a, b, w] of road) {
    graph[a].push([b, w])
    graph[b].push([a, w])
  }

  const distance = Array(N + 1).fill(Infinity)
  distance[1] = 0

  const pq = [[0, 1]] // [거리, 노드]

  while (pq.length > 0) {
    const [dist, cur] = pq.shift()

    if (distance[cur] < dist) continue

    for (const [next, w] of graph[cur]) {
      const cost = dist + w
      if (cost < distance[next]) {
        distance[next] = cost
        pq.push([cost, next])
      }
    }
  }

  return distance.filter((dist) => dist <= K).length
}
