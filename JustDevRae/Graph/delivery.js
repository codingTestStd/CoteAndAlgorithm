function solution(N, road, K) {
  const graph = Array.from({ length: N + 1 }, () => []);
  for (const [a, b, c] of road) {
    graph[a].push({ node: b, cost: c });
    graph[b].push({ node: a, cost: c });
  }

  const distance = new Array(N + 1).fill(Infinity);
  distance[1] = 0;

  const visited = new Array(N + 1).fill(false);

  for (let i = 1; i <= N; i++) {
    let current = -1;

    for (let j = 1; j <= N; j++) {
      if (!visited[j] && (current === -1 || distance[j] < distance[current])) {
        current = j;
      }
    }

    if (current === -1) break;

    visited[current] = true;

    for (const { node, cost } of graph[current]) {
      if (distance[node] > distance[current] + cost) {
        distance[node] = distance[current] + cost;
      }
    }
  }
  return distance.filter((time) => time <= K).length;
}
