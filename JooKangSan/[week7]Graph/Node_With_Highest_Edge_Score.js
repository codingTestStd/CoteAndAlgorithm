function edgeScore(edges) {
  const n = edges.length;
  const scores = new Array(n).fill(0);
  
  for (let i = 0; i < n; i++) {
      scores[edges[i]] += i;
  }
  
  let maxScore = 0;
  let maxNode = 0;
  
  for (let i = 0; i < n; i++) {
      if (scores[i] > maxScore) {
          maxScore = scores[i];
          maxNode = i;
      }
  }
  
  return maxNode;
}