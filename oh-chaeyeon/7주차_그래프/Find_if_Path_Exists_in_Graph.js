/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  const graph = Array.from({ length: n }, () => []);

  edges.forEach(([u, v]) => {
    graph[u].push(v);
    graph[v].push(u);
  });

  const visited = new Set();

  const dfs = (node) => {
    if (node === destination) return true;
    visited.add(node);

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor) && dfs(neighbor)) {
        return true;
      }
    }

    return false;
  };

  return dfs(source);
};
