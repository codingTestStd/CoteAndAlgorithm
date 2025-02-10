function solution(before, after) {
  var answer = 0;
  const beforeCount = {};
  const afterCount = {};

  for (const char of before) {
    beforeCount[char] = (beforeCount[char] || 0) + 1;
  }

  for (const char of after) {
    afterCount[char] = (afterCount[char] || 0) + 1;
  }

  for (const key in beforeCount) {
    if (beforeCount[key] !== afterCount[key]) {
      return (answer = 0);
    }
  }

  return (answer = 1);
}
