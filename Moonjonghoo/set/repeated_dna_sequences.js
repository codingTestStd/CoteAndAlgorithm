/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  let hash = new Set();
  let answer = [];
  for (let i = 0; i < s.length; i++) {
    let dna = s.substring(i, i + 10);

    if (!hash.has(dna) && dna.length === 10) {
      hash.add(dna);
    } else if (hash.has(dna) && dna.length === 10) {
      answer.push(dna);
    }
  }
  let newhash = new Set(answer);

  return [...newhash];
};

console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"));
