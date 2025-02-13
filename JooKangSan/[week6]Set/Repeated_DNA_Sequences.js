/**
 * @param {string} s
 * @return {string[]}
 */
function findRepeatedDnaSequences(s) {
  const see = new Set();
  const seen = new Set();

  for (let i = 0; i <= s.length - 10; i++) {
    const sequence = s.slice(i, i + 10);
    if (see.has(sequence)) {
      seen.add(sequence);
    }
    see.add(sequence);
  }

  return [...seen];
}
