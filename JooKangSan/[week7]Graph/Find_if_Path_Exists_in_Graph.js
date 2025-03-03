/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
function validPath(n, edges, source, destination) {
  const graph = new Map();

  for (let i = 0; i < n; i++) {
      graph.set(i, []);
  }

  for (const [u, v] of edges) {
      graph.get(u).push(v);
      graph.get(v).push(u);
  }

  const visited = new Array(n).fill(false);
  const queue = [source];
  visited[source] = true;

  while (queue.length > 0) {
      const current = queue.shift();

      if (current === destination) {
          return true;
      }

      for (const neighbor of graph.get(current)) {
          if (!visited[neighbor]) {
              visited[neighbor] = true;
              queue.push(neighbor);
          }
      }
  }

  return false;
}