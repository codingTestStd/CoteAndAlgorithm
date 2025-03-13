function solution(emergency) {
  var answer = [];
  const indexed = emergency.map((value, index) => ({ value, index }));
  indexed.sort((a, b) => b.value - a.value);
  for (let i = 0; i < indexed.length; i++) {
      answer[indexed[i].index] = i + 1;
  }
  return answer ;
}
