var validPath = function (n, edges, source, destination) {
  const adjacencyList = new Array(n).fill(0).map(() => []);
  for (const [nodeA, nodeB] of edges) {
    adjacencyList[nodeA].push(nodeB);
    adjacencyList[nodeB].push(nodeA);
  }

  const visitedNodes = new Array(n).fill(false);
  const bfsQueue = [source];
  visitedNodes[source] = true;

  while (bfsQueue.length) {
    const currentNode = bfsQueue.shift();
    if (currentNode === destination) return true;

    for (const adjacentNode of adjacencyList[currentNode]) {
      if (!visitedNodes[adjacentNode]) {
        visitedNodes[adjacentNode] = true;
        bfsQueue.push(adjacentNode);
      }
    }
  }

  return false;
};
