function solution(before, after) {
  const getLetterCount = (letter) => {
    const hash = {};
    letter.split('').forEach((e) => {
      if (!hash[e]) {
        hash[e] = 0;
      }
      hash[e] += 1;
    });

    return hash;
  };
  const beforeCount = getLetterCount(before);
  const afterCount = getLetterCount(after);

  for (const [key, value] of Object.entries(beforeCount)) {
    if (!afterCount[key]) return 0;
    if (afterCount[key] !== value) return 0;
  }
  return 1;
}

console.log(solution('allpe', 'apple'));
