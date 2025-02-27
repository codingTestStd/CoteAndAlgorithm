function solution(n, wires) {
  const graph = Array.from({ length: n + 1 }, () => []);

  for (const [v1, v2] of wires) {
    graph[v1].push(v2);
    graph[v2].push(v1);
  }

  let minDifference = Number.MAX_VALUE;

  const dfs = (node, visited) => {
    let count = 1;
    visited[node] = true;

    for (const neighbor of graph[node]) {
      if (!visited[neighbor]) {
        count += dfs(neighbor, visited);
      }
    }

    return count;
  };

  for (const [v1, v2] of wires) {
    const visited = Array(n + 1).fill(false);
    visited[v1] = true;
    const count = dfs(v2, visited);
    const difference = Math.abs(count - (n - count));
    minDifference = Math.min(minDifference, difference);
  }

  return minDifference;
}
