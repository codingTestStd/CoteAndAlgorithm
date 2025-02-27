const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M, V] = input[0].split(" ").map(Number);
const edges = input.slice(1).map((line) => line.split(" ").map(Number));

const graph = Array.from({ length: N + 1 }, () => []);
edges.forEach(([a, b]) => {
  graph[a].push(b);
  graph[b].push(a);
});
graph.forEach((node) => node.sort((a, b) => a - b));

const dfs = (v, visited = []) => {
  if (visited.includes(v)) return;
  visited.push(v);
  graph[v].forEach((n) => dfs(n, visited));
  return visited;
};

const bfs = (v) => {
  let queue = [v],
    visited = [];
  while (queue.length) {
    let node = queue.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      queue.push(...graph[node].filter((n) => !visited.includes(n)));
    }
  }
  return visited;
};

console.log(dfs(V, []).join(" "));
console.log(bfs(V).join(" "));
