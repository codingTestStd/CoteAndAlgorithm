function solution(n) {
  var answer = [];
  let division = 2;
  while (n !== 1) {
    if (n % division === 0) {
      n = n / division;
      answer.push(division);
    } else {
      division++;
    }
  }
  return Array.from(new Set(answer));
}

console.log(solution(12)); // 기대값: [2, 3]
console.log(solution(17)); // 기대값: [17]
console.log(solution(420)); // 기대값: [2, 3, 5, 7]
