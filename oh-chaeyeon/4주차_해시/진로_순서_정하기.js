function solution(emergency) {
  return emergency.map(
    (e) => [...emergency].sort((a, b) => b - a).indexOf(e) + 1
  );
}
