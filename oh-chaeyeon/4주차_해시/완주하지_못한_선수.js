function solution(participant, completion) {
  const count = participant.reduce((acc, name) => {
    acc[name] = (acc[name] || 0) + 1;
    return acc;
  }, {});

  completion.forEach((name) => {
    count[name]--;
  });

  return Object.keys(count).find((name) => count[name] > 0);
}
