var findJudge = function (n, trust) {
  if (n === 1) return 1;

  const trustScore = new Array(n + 1).fill(0);

  for (const [a, b] of trust) {
    trustScore[a]--;
    trustScore[b]++;
  }

  for (let i = 1; i <= n; i++) {
    if (trustScore[i] === n - 1) return i;
  }

  return -1;
};
