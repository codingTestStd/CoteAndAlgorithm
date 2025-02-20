function solution(s) {
  const charSet = new Set();
  const duplicateSet = new Set();

  for (const char of s) {
    if (charSet.has(char)) {
      duplicateSet.add(char);
    } else {
      charSet.add(char);
    }
  }

  const uniqueChars = [...charSet].filter((char) => !duplicateSet.has(char));

  return uniqueChars.sort().join("");
}
