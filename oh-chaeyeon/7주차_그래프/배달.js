function solution(N, road, K) {
  const graph = Array.from({ length: N + 1 }, () => []);

  for (const [a, b, c] of road) {
    graph[a].push([b, c]);
    graph[b].push([a, c]);
  }

  const distances = Array(N + 1).fill(Infinity);
  distances[1] = 0;
  const priorityQueue = [[0, 1]];

  while (priorityQueue.length > 0) {
    const [currentDistance, currentNode] = priorityQueue.shift();

    if (currentDistance > distances[currentNode]) {
      continue;
    }

    for (const [neighbor, time] of graph[currentNode]) {
      const newDistance = currentDistance + time;
      if (newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance;
        priorityQueue.push([newDistance, neighbor]);
        priorityQueue.sort((a, b) => a[0] - b[0]);
      }
    }
  }

  return distances.filter((distance) => distance <= K).length;
}
