function solution(arr, k) {
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (!answer.includes(arr[i])) {
      answer.push(arr[i]);
    }
  }

  if (answer.length > k) {
    return answer.slice(0, k);
  } else if (answer.length < k) {
    while (answer.length !== k) {
      answer.push(-1);
    }
    return answer;
  } else {
    return answer;
  }
}

console.log(solution([0, 1, 1, 2, 2, 3], 5));
console.log(solution([0, 1, 1, 1, 1], 4));
