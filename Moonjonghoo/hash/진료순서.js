function solution(emergency) {
  var answer = [];
  let newarr = emergency.slice();
  newarr.sort((a, b) => b - a);
  let map = new Map();
  for (let i = 0; i < newarr.length; i++) {
    map.set(newarr[i], i + 1);
  }
  for (let i = 0; i < emergency.length; i++) {
    let number = map.get(emergency[i]);
    answer.push(number);
  }
  return answer;
}

console.log(solution([3, 76, 24]));
