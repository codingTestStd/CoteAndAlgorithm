function solution(d) {
  let arr = d.split("");
  let stack = [];
  let score = 0;

  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      if (arr[i] === "1" && arr[i + 1] === "0") {
        // 점수가 10인 경우
        score = 10; // 총 스코어에 10점 추가
        i++; // 0 건너뛰기
      } else score = arr[i];
    } else if (arr[i] === "S") {
      stack.push(Math.pow(score, 1)); // Single -> 1제곱
    } else if (arr[i] === "D") {
      stack.push(Math.pow(score, 2)); // Double -> 2제곱
    } else if (arr[i] === "T") {
      stack.push(Math.pow(score, 3)); // Triple -> 3제곱
    } else if (arr[i] === "#") {
      // 아차상일 경우
      stack[stack.length - 1] *= -1; // 해당 점수 빼기
    } else if (arr[i] === "*") {
      // 스타상일 경우
      stack[stack.length - 1] *= 2; // 해당 점수 2배
      stack[stack.length - 2] *= 2; // 바로 전 점수도 2배
    }
  }

  let result = 0;
  for (let i = 0; i < stack.length; i++) {
    result += stack[i]; // 총 점수 구하기
  }

  return result; // 총 점수 반환
}
