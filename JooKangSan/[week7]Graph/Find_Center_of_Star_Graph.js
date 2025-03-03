/**
 * @param {number[][]} edges
 * @return {number}
 */
function findCenter(edges) {
  const [a, b] = edges[0];
  const [c, d] = edges[1];
  
  return a === c || a === d ? a : b;
}