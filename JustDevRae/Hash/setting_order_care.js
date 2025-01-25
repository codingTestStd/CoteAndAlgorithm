function solution(emergency) {
  const sorted = [...emergency].sort((a, b) => b - a);
  const rankMap = new Map();

  sorted.forEach((value, index) => {
    rankMap.set(value, index + 1);
  });

  return emergency.map((value) => rankMap.get(value));
}
