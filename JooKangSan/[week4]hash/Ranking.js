
function solution(score) {
    const sum = score.map((el) => (el[0] + el[1]));
    let sortedSum = sum.slice().sort((a, b) => b - a);
  
    return sum.map((el) => sortedSum.indexOf(el) + 1);
  }