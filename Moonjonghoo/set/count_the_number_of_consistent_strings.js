/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  let hash = new Set(allowed.split(""));
  let answer = words.length;
  console.log(hash);
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (!hash.has(words[i][j])) {
        answer--;
        break;
      }
    }
  }
  return answer;
};

console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]));
