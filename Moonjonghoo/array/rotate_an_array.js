function solution(numbers, direction) {
  var answer = [];
  //배열내부에 위치를 변경시키는 방법
  for (let i = 0; i < numbers.length; i++) {
    if (direction === "right") {
      let start = numbers[numbers.length - 1];
      answer = numbers.slice(0, numbers.length - 1);
      answer.unshift(start);
    }
    if (direction === "left") {
      let start = numbers[0];
      answer = numbers.slice(1, numbers.length);
      answer.push(start);
    }
  }

  return answer;
}

console.log(solution([1, 2, 3], "right"));
